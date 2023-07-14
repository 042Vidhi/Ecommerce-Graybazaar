from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer
from rest_framework import generics
# from django_filters.rest_framework import DjangoFilterBackend


# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint':'/products/',
            'method':'GET',

        },
        {
            'Endpoint':'/products/id',
            'method':'GET',
        },
        {
            'Endpoint':'/products/create/',
            'method':'POST',

        },
        {
            'Endpoint':'/products/id/update/',
            'method':'PUT',
        },
        {
            'Endpoint':'/filter/products/<your filter>',
            'method':'GET',
        },
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    products=Product.objects.all()
    serializer=ProductSerializer(products,many=True)
    return Response(serializer.data)

# class ProductsList(generics.ListCreateAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#     filter_backends = [DjangoFilterBackend]
#     filterset_fields = ['category']

#     def get_queryset(self):
#         queryset = Product.objects.all()
#         category = self.request.query_params.get('category', None)
#         if category is not None:
#             queryset = queryset.filter(category=category)
#         return queryset
    



@api_view(['GET'])
def getProduct(request,pk):
    product=Product.objects.get(id=pk)
    serializer=ProductSerializer(product,many=False)
    return Response(serializer.data)

@api_view(['POST'])
def createProduct(request):
    data=request.data
    product=Product.objects.create(
        name=data['name'],
        price=data['price'],
        description=data['description'],
        image=data['image'],
        category=data['category'],
    )
    serializer=ProductSerializer(product,many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateProduct(request,pk):
    data=request.data
    product=Product.objects.get(id=pk)
    serializer=ProductSerializer(product,data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data) 

