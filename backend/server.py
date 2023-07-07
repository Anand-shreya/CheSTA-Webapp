from flask import Flask, jsonify, json
from pymongo import MongoClient
from flask_pymongo import PyMongo
from bson import ObjectId

# class JSONEncoder(json.JSONEncoder):
#     def default(self, o):
#         if isinstance(o, ObjectId):
#             return str(o)
#         return super().default(o)

# JSONEncoder().encode(analytics)

app = Flask(__name__)

# Connect to MongoDB
app.config["MONGO_URI"]="mongodb://localhost:27017/Users"

mongo = PyMongo(app).db

# db = client['Users']
# collection = db['users']

@app.route('/data', methods=['GET'])
def get_data():
    data = list(mongo.db.users.find())  # Retrieve all documents from the collection
    print(data)
    return  {"user":"mona"}


@app.route('/signup', methods=['GET','POST'])
def signup():
    result = list(mongo.db.users.find())
    print(result)
    return json.loads(json_util.dumps(result))

if __name__ == '__main__':
    app.run(debug=True)
