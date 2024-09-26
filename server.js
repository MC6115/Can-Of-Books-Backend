"use strict";

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { getBooks, addBook, seedDatabase, removeBook, resetDatabase } = require("./modules/Handlers");

require("./database");

const Book = require("./models/Book");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/test", (request, response) => {
	response.send("test request received");
});

app.get("/books", getBooks);
app.post("/addBook", addBook);
app.get("/seed", seedDatabase);
app.delete("/removeBook", removeBook);
app.delete("/reset", resetDatabase);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
console.log('We ARE LIVEEEE')