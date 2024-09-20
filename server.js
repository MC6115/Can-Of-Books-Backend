"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");

require("./database");

const Book = require("./models/Book");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
	response.send("test request received");
});

app.get("/books", async (request, response) => {
	const books = await Book.find({});
	response.json(books);
});

app.get("/addbook", async (request, response) => {
	const title = request.query.title || "";
	if (!title) return response.status(400).json({ message: "?title is required" });
	const book = new Book({
		title: title,
	});
	book.save();
	response.status(201).json({ message: "New book created!" });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));