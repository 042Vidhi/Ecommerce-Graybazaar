from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes),
    path("products/", views.getProducts),
    path("products/create/", views.createProduct),
    path("products/<str:pk>/", views.getProduct),
    path("products/<str:pk>/update/", views.updateProduct),
    # path("filter/products/", views.ProductsList.as_view()),  # Add this line for filtered products
]
