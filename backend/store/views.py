from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product, Catagroy
from .serializers import ProductSerializer, CatagroySerializer

@api_view(['GET'])
def get_products(request):
    product = Product.objects.all()
    serializer =  ProductSerializer(product, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_product(request, pk):
    try:
        product = Product.objects.get(id=pk)
        serializer = ProductSerializer(product, context = {'request': request})
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=404)



@api_view(['GET'])
def get_catagorys(request):
    catagory = Catagroy.objects.all()
    serializer =  CatagroySerializer(catagory, many=True)
    return Response(serializer.data)