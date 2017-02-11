from django.conf.urls import url
from gele import views

urlpatterns = [
    # 書籍
    url(r'^testone/$', views.test_one, name='test_one'),   # 一覧
]
