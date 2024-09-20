require("./database");

const Book = require("./models/Book");

async function seed() {
	const libro1 = new Book({
		title: "Sapiens",
	});
	const libro2 = new Book({
		title: "Metafisica",
	});
	const libro3 = new Book({
		title: "El Alquimista",
	});

	libro1.save();
	libro2.save();
	libro3.save();
}

seed();