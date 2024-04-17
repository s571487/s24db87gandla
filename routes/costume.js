var express = require('express');
const costume_controller= require('../models/costumeController');
var router = express.Router();

// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    res.redirect("/login");
}
router.get('/detail', costume_controller.costume_view_one_Page);
router.get('/create', secured,costume_controller.costume_create_Page);
router.get('/update',secured, costume_controller.costume_update_Page);
router.get('/delete', secured,costume_controller.costume_delete_Page);
module.exports = router;