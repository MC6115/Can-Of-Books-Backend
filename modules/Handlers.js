const Book = require("../models/Book");

const getBooks = async (request, response) => {
  try {
    const books = await Book.find({});
    response.status(200).json(books);
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error fetching books" });
  }
};

const addBook = async (request, response) => {
  const { title, description, status } = request.body;

  if (!title || !description) {
    return response.status(400).json({ message: "Title and description are required" });
  }

  const book = new Book({
    title,
    description,
    status: status || "created",
  });

  try {
    await book.save();
    response.status(201).json({ message: "New book created!", book });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error creating book" });
  }
};

const seedDatabase = async (request, response) => {
  await require("./seed")();
  response.status(201).json({ message: "Seed executed" });
};

const removeBook = async (request, response) => {
  try {
    const bookId = request.query.id;
    if (!bookId) return response.status(400).json({ message: "?id is required" });

    await Book.deleteOne({ _id: bookId });
    response.status(200).json({ message: "Book removed successfully" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ message: "Error removing book" });
  }
};

const resetDatabase = async (request, response) => {
    try {
        await Book.deleteMany({}); 
        response.status(200).json({ message: "Database cleared successfully." });
        console.log('excuse me?')
    } catch (error) {
        console.error("Error clearing database:", error);
        response.status(500).json({ message: "Error clearing database." });
    }
};

module.exports = {
  getBooks,
  addBook,
  seedDatabase,
  removeBook,
  resetDatabase,
};
