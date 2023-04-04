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

