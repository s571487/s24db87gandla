var Costume = require('../models/costume.js');

exports.costume_create_post = async function(req, res) {
    console.log(req.body); 
    let document = new Costume({
        costume_type: req.body.costume_type,
        cost: req.body.cost,
        size: req.body.size
    });

    try {
        let result = await document.save();
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send(`{"error": ${err}}`);
    }
};


exports.costume_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};

exports.costume_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};

exports.costume_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};

exports.costume_list = async function (req, res) {
    try {
        theCostumes = await Costume.find();
        res.send(theCostumes);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
exports.costume_view_all_Page = async function (req, res) {
    try {
        const theCostumes = await Costume.find();
        res.render('costumes', { title: 'Costume Search Results', results: theCostumes });
    } catch (err) {
        res.status(500).send(`{"error": ${err}}`);
    }
};    