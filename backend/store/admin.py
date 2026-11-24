from django.contrib import admin
from .models import Product, User_Profile, Catagroy, Order, OrderItem

# Register your models here.

admin.site.register(Catagroy)
admin.site.register(Product)
admin.site.register(User_Profile)
admin.site.register(Order)
admin.site.register(OrderItem)
