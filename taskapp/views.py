from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods


@login_required
@require_http_methods(["GET"])
def index_view(request):
    return render(request, 'taskapp/index.html')


@login_required
@require_http_methods(["GET"])
def timer_view(request):
    return render(request, 'taskapp/timer.html')

