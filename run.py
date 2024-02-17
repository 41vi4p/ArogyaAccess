import os
from flask import Flask, request, render_template, redirect, url_for, flash, make_response, session
import pymysql
app=Flask(__name__)

import logging
from logging.handlers import RotatingFileHandler

@app.route('/login',methods=['GET','POST'])
def login():
    error=None
    if request.method =='POST':
        if valid_login(request.form['username'], request.form['password']):
            flash("Successfully Logged In!")
            session['username'] = request.form.get('username')
            return redirect(url_for('welcome'))
            #return "Welcome back, %s"% request.form['username']
        else:
            error = 'Incorrect username and password'
            app.logger.warning("Incorrect username and password for user (%s)", request.form.get('username'))
        #return "User %s logged in" % request.form['username']
    return render_template('login.html', error=error)

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))

def valid_login(username, password):
    MYSQL_DATABASE_HOST = os.getenv('IP', '0.0.0.0')
    MYSQL_DATABASE_USER = 'root'
    MYSQL_DATABASE_PASSWORD = ''
    MYSQL_DATABASE_DB = 'my_flask_app'
    conn= pymysql.connect(
        host=MYSQL_DATABASE_HOST,
        user=MYSQL_DATABASE_USER,
        passwd=MYSQL_DATABASE_PASSWORD,
        db=MYSQL_DATABASE_DB
    )
    cursor = conn.cursor()
    cursor.execute("SELECT * from user WHERE username='%s' AND password='%s'" %(username,password))
    data = cursor.fetchone()
    if data:
        return True
    else:
        return False
    
@app.route('/')
def welcome():
    #username = request.cookies.get('username')
    if 'username' in session:
        return render_template('welcome.html', username=session['username'])
    else:
        return redirect(url_for('login'))
    #return render_template('welcome.html', username=username)
    
if __name__ =='__main__':
    host=os.getenv('IP','0.0.0.0')
    port=int(os.getenv('PORT',5000))
    app.debug=True
    app.secret_key ='\x82\xfb\xe1&\x1b9\tY\xe2\x03\xdf\n\xfc]3c]p\xa1\xd6\xc9\xf0=\x11'
    

    #logging
    handler =RotatingFileHandler('error.log', maxBytes=10000, backupCount=1)
    handler.setLevel(logging.INFO)
    app.logger.addHandler(handler)

    app.run(host=host, port=port)