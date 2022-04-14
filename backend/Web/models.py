from Web import db


class Message(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(), nullable=False)
    message = db.Column(db.String(), nullable=False)

    def dump(self):
        return {'username': str(self.username), 'message': str(self.message)}

# class Contact(db.Model):    # To be implemented

# class User(db.Model):       # To be implemented

