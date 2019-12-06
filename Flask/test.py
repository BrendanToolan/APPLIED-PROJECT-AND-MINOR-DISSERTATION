#https://www.codementor.io/adityamalviya/python-flask-mysql-connection-rxblpje73
#https://pythonprogramming.net/flask-connect-mysql-using-mysqldb-tutorial/

from flask import Flask, render_template
import pymysql

app = Flask(__name__)

class Database:
    def __init__(self):
        host = "localhost"
        user = "root"
        password = ""
        db = "bigproject"

        self.con = pymysql.connect(host=host, user=user, password=password, db=db, cursorclass=pymysql.cursors.
                                   DictCursor)
        self.cur = self.con.cursor()

    def list_test(self):
        self.cur.execute("SELECT * from test")
        result = self.cur.fetchall()

        return result

@app.route('/')
def test():

    def db_query():
        db = Database()
        emps = db.list_test()

        return emps

    res = db_query()

    return render_template('main.component.html', result=res, content_type='application/json')