const express = require('express');
const router = express.Router();

const restController = require('../controllers/restController');


router.get('/alltask', restController.allTasks);

router.get('/task/:taskId', restController.singleTask);

router.post('/add_task', restController.addTask);

router.put('/update_user', restController.updateTask);

router.delete('/task/:taskId', restController.deleteTask);



module.exports = router;