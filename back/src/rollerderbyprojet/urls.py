"""rollerderbyprojet URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rollerderbyapp import views
# from rollerderbyprojet import views as project_views

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', views.index),
    # path('', views.IndexView.as_view()),
    # path('contact/', project_views.contact),
    # path('thanks/', project_views.thanks),
    path('rollerderby/', include('rollerderbyapp.urls')),
    # path('__debug__/', include('debug_toolbar.urls')),
]
