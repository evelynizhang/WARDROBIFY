from django.shortcuts import render
from .models import BinVO, Shoe
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse

# Create your views here.


class BinVODetailEncoder(ModelEncoder):
    model = BinVO
    properties = ["closet_name", "bin_number", "bin_size", "import_href"]

class ShoeDetailEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer","model_name","color","url", "bin","id"
    ]
    encoders={
        "bin": BinVODetailEncoder(),
    }

class ShoeListEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer","model_name","color","url","id"
    ]

@require_http_methods(["GET", "POST"])
def api_list_shoes(request, bin_vo_id=None):
    if request.method == "GET":
        if bin_vo_id is not None:
            shoes = Shoe.objects.filter(bin=bin_vo_id)
        else:
            shoes = Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoes}, encoder=ShoeListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            print(content)
            bin_href = content["bin"]["import_href"]

            bin = BinVO.objects.get(import_href=bin_href)
            content["bin"] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid bin id"}, status=400,
            )

        shoe = Shoe.objects.create(**content)
        return JsonResponse(shoe, encoder=ShoeDetailEncoder,safe=False,)


@ require_http_methods(["GET", "PUT", "DELETE"])
def api_show_shoes(request, pk):
    if request.method == "GET":
        shoes = Shoe.objects.get(id=pk)
        return JsonResponse(
            {"shoes": shoes}, encoder=ShoeDetailEncoder, safe=False,
        )

    elif request.method == "DELETE":
        count, _ = Shoe.objects.filter(id=pk).delete()
        return JsonResponse({"delete": count > 0})

    else:
        content = json.loads(request.body)
        try:
            if "bin" in content:
                bin = BinVO.objects.get(import_href=content["bin"]["import_href"])
                content["bin"] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "invaild bin id"}, status=400
            )
        Shoe.objects.filter(id=pk).update(**content)
        shoes = Shoe.objects.get(id=pk)
        return JsonResponse(shoes, encoder=ShoeDetailEncoder, safe=False)
