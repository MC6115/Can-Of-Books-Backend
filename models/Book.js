const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
	title: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
	status: {
		type: String,
		default: "created",
	},
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;