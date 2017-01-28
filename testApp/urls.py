"""testApp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include   # ←, includeを追加
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^cms/', include('cms.urls', namespace='cms')),   # ←ここを追加
    url(r'^gele/', include('gele.urls', namespace='gele')),   # ←ここを追加
    url(r'^tkhs/', include('tkhs.urls', namespace='tkhs')),   # ←ここを追加
    url(r'^hsgw/', include('hsgw.urls', namespace='hsgw')),   # ←ここを追加
    url(r'^ijm/', include('ijm.urls', namespace='ijm')),   # ←ここを追加
    url(r'^tme/', include('tme.urls', namespace='tme')),   # ←ここを追加
]
