let client = require('../dbConnection');

let collection = client.db().collection('Cats');

function postCat(cat, callback) {
    collection.insertOne(cat, callback);
}

async function getAllCats(callback) {
    console.log("rrr")
    let data = await collection.find({}).toArray();
    if (data) {
        callback(data, false)
    } else {
        callback(false, data)
    }
}

module.exports = { postCat, getAllCats }