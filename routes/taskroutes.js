const express = require('express');
const router = express.Router();
const { get_tasks, create_task, update_task, delete_task } = require('../controllers/taskcontroller');

router.get('/', get_tasks);
router.post('/', create_task);
router.put('/:id', update_task);
router.delete('/:id', delete_task);

module.exports = router;
