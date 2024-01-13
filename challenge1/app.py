from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

user_credentials = {'SyntaxSorcerer': 'C0d3F0rc3sR0ck!'}

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    if username in user_credentials and user_credentials[username] == password:
        with open("flag.txt","r") as file:
            flag = file.read()
        return render_template('second_page.html',flag=flag)
    else:
        return render_template('login.html', error='Invalid username or password')

if __name__ == '__main__':
    app.run(debug=True,host ="0.0.0.0")

