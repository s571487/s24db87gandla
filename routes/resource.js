var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api.js');
var costume_controller = require('../models/costumeController.js');

router.get('/', api_controller.api);
router.get('/detail', costume_controller.costume_view_one_Page);
router.post('/costumes', costume_controller.costume_create_post);
router.delete('/costumes/:id', costume_controller.costume_delete);
router.put('/costumes/:id', costume_controller.costume_update_put);
router.get('/costumes/:id', costume_controller.costume_detail);
router.get('/sudha', costume_controller.costume_list); 
router.get('/create', costume_controller.costume_create_Page);
router.get('/update', costume_controller.costume_update_Page);
router.get('/delete', costume_controller.costume_delete_Page);


module.exports = router;

