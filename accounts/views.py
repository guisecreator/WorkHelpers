from django.shortcuts import render
from django.shortcuts import render
from django.conf import settings
from django.contrib.auth import get_user_model
from django.shortcuts import  render
from django.http import HttpResponse
from .forms import LoginForm
from django.contrib.auth import login as auth_login, authenticate

PER_PAGE = getattr(settings, "PAGINATOR_PER_PAGE", None)
User = get_user_model()


def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(request,
                                username=cd['username'],
                                password=cd['password'])
        if user is not None:
            if user.is_active:
                auth_login(request, user)
                return HttpResponse('Authenticated successfully')
            else:
                return HttpResponse('Disabled account')
        else:
            return HttpResponse('Invalid login')
    else:
        form = LoginForm()
    return render(request, 'main/login.html', {'form': form})
