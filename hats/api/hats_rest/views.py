from django.shortcuts import render
from .models import LocationVO, Hat
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse, Http404



# Create your views here.


class LocationVODetailEncoder(ModelEncoder):
    model = LocationVO
    properties = ["name", "description", "import_href"]


class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = [
        "fabric", "style_name", "color", "picture_url", "id", "wardrobe_location",
    ]
    encoders = {
        "wardrobe_location": LocationVODetailEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_hats(request, location_vo_id=None):
    if request.method == "GET":
        if location_vo_id is not None:
            hats = Hat.objects.filter(wardrobe_location=location_vo_id)
        else:
            hats = Hat.objects.all()
        return JsonResponse(
            {"hats": hats}, encoder=HatDetailEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            location_href = content["wardrobe_location"]
            location = LocationVO.objects.get(import_href=location_href)
            content["wardrobe_location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid wardrobe location id"}, status=400,
            )

        hat = Hat.objects.create(**content)
        return JsonResponse(hat, encoder=HatDetailEncoder, safe=False,)


@require_http_methods(["POST"])
def api_create_hat(request):
    content = json.loads(request.body)

    try:
        location_href = content["wardrobe_location"]
        location = LocationVO.objects.get(import_href=location_href)

        hat = Hat.objects.create(
            fabric=content["fabric"],
            style_name=content["style_name"],
            color=content["color"],
            picture_url=content["picture_url"],
            wardrobe_location=location
        )

        hat_data = HatDetailEncoder().encode(hat)
        return JsonResponse(hat_data, safe=False)

    except LocationVO.DoesNotExist:
        return JsonResponse({"message": "Invalid wardrobe location id"}, status=400)


@require_http_methods(["GET"])
def api_detail_hat(request, pk):
    try:
        hat = Hat.objects.get(pk=pk)
        hat_data = HatDetailEncoder().encode(hat)
        return JsonResponse(hat_data, safe=False)
    except Hat.DoesNotExist:
        return JsonResponse({"message": "Hat not found."}, status=404)


@require_http_methods(["PUT"])
def api_update_hat(request, hat_id):
    try:
        hat = Hat.objects.get(id=hat_id)
    except Hat.DoesNotExist:
        raise Http404("Hat does not exist")

    content = json.loads(request.body)

    if "fabric" in content:
        hat.fabric = content["fabric"]
    if "style_name" in content:
        hat.style_name = content["style_name"]
    if "color" in content:
        hat.color = content["color"]
    if "picture_url" in content:
        hat.picture_url = content["picture_url"]
    if "wardrobe_location" in content:
        try:
            location_href = content["wardrobe_location"]
            location = LocationVO.objects.get(import_href=location_href)
            hat.wardrobe_location = location
        except LocationVO.DoesNotExist:
            return JsonResponse({"message": "Invalid wardrobe location id"}, status=400)

    hat.save()

    hat_data = HatDetailEncoder().encode(hat)
    return JsonResponse(hat_data, safe=False)

@require_http_methods(["DELETE"])
def api_delete_hat(request, hat_id):
    try:
        hat = Hat.objects.get(id=hat_id)
        hat.delete()
        return JsonResponse({"message": "Hat deleted successfully."})
    except Hat.DoesNotExist:
        raise Http404("Hat not found.")
