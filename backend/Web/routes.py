from Web import app, db
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import exc
from Web.models import Message
import json


@app.before_first_request
def setup():
    print("Running....")
    try:
        db.create_all()
        print("Database created.")
    except:
        print("Database exists.")


@app.route('/')
def main_page():
    return render_template('index.html')


@app.route('/chat', methods=['GET', 'POST'])
def chat():
    if request.method == 'GET': # Request Message
        all_message = Message.query.all()
        json_string = json.dumps([ob.dump() for ob in all_message]) # Convert List of Object to Json File
        return json_string
    elif request.method == 'POST':
        data = request.get_json()
        temp_message = Message(username=str(data[0]['username']), message=str(data[0]['message'])) # Create Message Object
        try:
            db.session.add(temp_message) # Add Message to database
            db.session.commit() # Commit Message to database
            all_message = Message.query.all()
            json_string = json.dumps([obj.dump() for obj in all_message]) # Convert List of Object to Json File
            return json_string
        except exc.IntegrityError:
            db.session.rollback()
            return "Error"


@app.route('/contact')
def contact():
    # user = User.query.filter_by(...).first()
    # contact = user.contact
    # return render_template('contact.html', contact=contact)
    return render_template('contact.html')


@app.route('/management')
def management():
    return render_template('contact.html')


@app.route('/setting')
def setting():
    return render_template('setting.html')


if __name__ == '__main__':
    app.run(debug=True)