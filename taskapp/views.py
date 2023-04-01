from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods


@login_required
@require_http_methods(["GET", "POST"])
def tasks(request):
    return render(request, 'taskapp/index.html')