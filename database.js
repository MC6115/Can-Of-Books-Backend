const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;
const Book = require("./models/Book");

async function main() {
	return await mongoose.connect(URL);
}

async function seed() {
	try {
		const libro1 = new Book({
			title: "Sapiens",
			description: "A brief history of humankind.",
		});
		const libro2 = new Book({
			title: "Metafisica",
			description: "Philosophical text on metaphysics.",
		});
		const libro3 = new Book({
			title: "El Alquimista",
			description: "A novel by Paulo Coelho.",
		});

		await libro1.save();
		await libro2.save();
		await libro3.save();

		console.log("Books saved successfully!");
	} catch (error) {
		console.error("Error saving books", error);
	}
}
seed();

main().catch((err) => console.log(err));