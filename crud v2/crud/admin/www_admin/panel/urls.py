from django.contrib import admin
from django.urls import path
from django import views
from . import views
from django.contrib.auth import views as auth_views



urlpatterns = [
    path('', views.home, name='home'),
    path('index/', views.index, name='index'),
    path('products/', views.products, name='products'),
    path('login/', views.CustomLoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page='/'), name='logout'),
    path('quotations/', views.quiotations, name='quotations'),
    path('projects/', views.projects, name='projects'),
    path('customers/', views.customers, name='customers'),
    path('overview/', views.overview, name='overview'),
    path('settings/', views.settings, name='settings'),
    path('myquotations/', views.myquotations, name='myquotations'),
    path('sign_up/', views.sign_up, name='sign_up'),

    # otras rutas...
]