from django.shortcuts import render

# Create your views here.


def test_one(request):
    """書籍の一覧"""
    #    return HttpResponse('書籍の一覧')
    return render(request,
                  'test_one/test_one.html',  # 使用するテンプレート
                  )  # テンプレートに渡すデータ