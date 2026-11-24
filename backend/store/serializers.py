
from rest_framework import serializers
from .models import Product, Catagroy

class CatagroySerializer(serializers.ModelSerializer):
    class Meta:
        model = Catagroy
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    catagro = CatagroySerializer(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'