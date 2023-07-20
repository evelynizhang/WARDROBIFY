from django.urls import path
from .views import api_list_hats, api_create_hat, api_detail_hat, api_update_hat, api_delete_hat

urlpatterns = [
    path('hats/', api_list_hats, name='api_list_hats'),
    path('hats/create/', api_create_hat, name='api_create_hat'),
    path('hats/<int:pk>/', api_detail_hat, name='api_detail_hat'),
    path('hats/<int:hat_id>/update/', api_update_hat, name='api_update_hat'),
    path('hats/<int:hat_id>/delete/', api_delete_hat, name='api_delete_hat'),

]
