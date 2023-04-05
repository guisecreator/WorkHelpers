from django.http import HttpResponse
from django.shortcuts import render


def page_not_found(request, exception):
      return HttpResponse("Ошибка 404", status=404)


def server_error(request):
    return HttpResponse("Ошибка 500", status=500)


def permission_denied(request, exception):
    return HttpResponse("Ошибка 403", status=403)