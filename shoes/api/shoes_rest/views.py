# from django.shortcuts import render
# from .models import BinVO, Shoe
# from common.json import ModelEncoder
# from django.views.decorators.http import require_http_methods
# import json
# from django.http import JsonResponse

# # Create your views here.


# class BinVODetailEncoder(ModelEncoder):
#     model = BinVO
#     properties = ["closet_name", "bin_number", "bin_size"]



# @require_http_methods(["GET", "POST"])
# def api_list_shoes(request, bin_vo_id=None):
#     if request.method == "GET":
#         if bin_vo_id is not None:
#             shoes = Shoe.objects.filter(bin=bin_vo_id)
#         else:
#             shoes = Shoe.objects.all()
#         return JsonResponse(
#             {"shoes": shoes}, encoder=BinVODetailEncoder,
#         )
#     else:
#         content = json.loads(request.body)
#         try:
