from django.shortcuts import render
import sqlalchemy as sa
import sqlalchemy.orm
import sqlalchemy.ext.declarative
from gele.samodels import Zoo
# Create your views here.


def test_one(request):
    url = 'mysql+pymysql://mycon:mycon123@localhost/test_db?charset=utf8'
    engine = sa.create_engine(url, echo=True)
    Session = sqlalchemy.orm.sessionmaker(bind=engine)
    session = Session()
    # オブジェクトを利用しても良い
    Zoos = session.query(Zoo)
    for Row in Zoos:
        print(Row.critter)
    # こっちの書き方でもよい
    rows = engine.execute('SELECT * FROM zoo')
    return render(request,
                  'test_one/test_one.html',  # 使用するテンプレート
                  {'Zoos': rows})  # テンプレートに渡すデータ


def make_dbtable(request):
    url = 'mysql+pymysql://mycon:mycon123@localhost/test_db?charset=utf8'
    engine = sa.create_engine(url, echo=True)

    # engine.execute('DROP TABLE zoo')
    engine.execute('CREATE TABLE zoo (critter VARCHAR(20) PRIMARY KEY, count INT, damages FLOAT)')

    # SQL文に「?」が使用できないので、代わりに「%s」を使用
    ins = "INSERT INTO zoo (critter, count, damages) VALUES (%s, %s, %s)"
    engine.execute(ins, "あひる", 10, 0.0)
    engine.execute(ins, "くま", 2, 1000.0)
    engine.execute(ins, "いたち", 1, 2000.0)
    return render(request,
                  'test_one/test_one.html',  # 使用するテンプレート
                  )  # テンプレートに渡すデータ

