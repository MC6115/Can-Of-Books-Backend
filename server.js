"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const seed = require("./seed")

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
	response.status(200).json(books);
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

app.get("/seed", async (request, response) => {
	seed();
	response.status(201).json({ message: "Seed executed" });
});

app.get("/reset", async (request, response) => {
	try {
		await Book.deleteMany({});
	} catch (error) {
		console.log(error)
	}
	response.status(201).json({ message: "Reset executed" });
});

app.get("/libros", async (request, response) => {
	try {
		responsee.redirect("/books", 308);
	} catch (e) {
		console.log(e);
		console.log(typeof e)
		response.status(500).json({ error: e });
	}
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));