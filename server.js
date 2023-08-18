// api/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = require('./routes/todo'); // Update the path accordingly

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const DB_USER = 'vercel-admin-user';
const DB_PWD = 'UFNbrgJ1DjaTPwIe';
const DB_URI =
	process.env.DB_URI ||
	`mongodb+srv://${DB_USER}:${DB_PWD}@ecommerce.6mw8wtv.mongodb.net/?retryWrites=true&w=majority`;
app.use(cors());
mongoose.connect(DB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
