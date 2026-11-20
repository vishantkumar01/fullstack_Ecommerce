from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.

def Home(request):

    User = {
        'name':'vishant',
        'age':23
    }

    return JsonResponse(User);