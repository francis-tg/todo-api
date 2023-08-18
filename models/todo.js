// api/models/Todo.js
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	title: String,
	completed: Boolean,
	rate: Number
});

module.exports = mongoose.model('Todo', todoSchema);
