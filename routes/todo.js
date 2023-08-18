// api/routes/todo.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo'); // Update the path accordingly

router.get('/', async (req, res) => {
	try {
		const todos = await Todo.find();
		res.json(todos);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

router.post('/', async (req, res) => {
	try {
		const newTodo = new Todo(req.body);
		const savedTodo = await newTodo.save();
		res.json(savedTodo);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
});
router.put('/:id', async (req, res) => {
	try {
		const Todos = await Todo.findByIdAndUpdate(req.params.id, req.body);
		res.json(Todos);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await Todo.findByIdAndDelete(req.params.id);
		res.json('success');
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

module.exports = router;
