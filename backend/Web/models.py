from Web import db


class Message(db.Model): # Message Class which pack username and message together
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(), nullable=False)
    message = db.Column(db.String(), nullable=False)
    # time = db.Column(db.DateTime(),nullable=False)
    # To be implemented

    def dump(self): # Covert Object into Json Array
        return {'username': str(self.username), 'message': str(self.message)}

# class Contact(db.Model):    # To be implemented

# class User(db.Model):       # To be implemented

