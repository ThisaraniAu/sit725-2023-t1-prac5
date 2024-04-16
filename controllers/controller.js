let collection = require('../models/cat');

const postCat = (req, res) => {
    let cat = req.body;
    collection.postCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        }
    });
}

const getAllCats = (req, res) => {
    console.log("In Controller..");
    collection.getAllCats((result, error) => {
        console.log("In Controller Success");
        if (!error) {
            console.log("Controlles Success");
            res.json({ statusCode: 200, data: result, message: 'success' });
        }
    });
}

const deleteCat = (req, res) => {
    let cat = req.body;
    collection.deleteOne(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        }
    });
}

module.exports = { postCat, getAllCats }