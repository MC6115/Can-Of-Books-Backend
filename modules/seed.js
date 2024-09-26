// require("./database");

const Book = require("../models/Book");

async function seed() {
	const libro1 = new Book({
	  title: "Sapiens",
	  description: "A brief history of humankind.",
	  status: "Available"
	});
	const libro2 = new Book({
	  title: "Metafisica",
	  description: "An introduction to metaphysical concepts.",
	  status: "Out of Stock"
	});
	const libro3 = new Book({
	  title: "El Alquimista",
	  description: "A philosophical journey of self-discovery.",
	  status: "Available"
	});
  
	await libro1.save();
	await libro2.save();
	await libro3.save();
  }

module.exports = seed;