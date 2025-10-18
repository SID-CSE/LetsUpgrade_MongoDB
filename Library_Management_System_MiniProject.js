// =============================
// LETSUPGRADE MONGODB 3 DAYS BOOTCAMP
// MINI PROJECT: LIBRARY MANAGEMENT SYSTEM
// =============================

// 1️⃣ Create Database & Collection
use libraryDB;
db.createCollection("books");

// 2️⃣ Insert Sample Data
db.books.insertMany([
  {
    "_id": 1,
    "title": "The Silent Library",
    "author": { "name": "Arundhati Menon", "born": 1982 },
    "genre": ["Mystery", "Thriller"],
    "publisher": "Penguin India",
    "publishedYear": 2018,
    "pages": 325,
    "language": "English",
    "availableCopies": 4,
    "ratings": [
      { "source": "Goodreads", "score": 4.3 },
      { "source": "Library Users", "score": 4.1 }
    ],
    "borrowedHistory": [
      { "member": "Siddharth Kumar", "borrowedOn": new Date("2023-07-12"), "returnedOn": new Date("2023-08-01") }
    ],
    "tags": ["mystery", "crime", "fiction"]
  },
  {
    "_id": 2,
    "title": "Learning Python",
    "author": { "name": "Mark Lutz", "born": 1956 },
    "genre": ["Education", "Programming"],
    "publisher": "O'Reilly Media",
    "publishedYear": 2020,
    "pages": 1648,
    "language": "English",
    "availableCopies": 7,
    "ratings": [
      { "source": "Goodreads", "score": 4.6 }
    ],
    "borrowedHistory": [
      { "member": "Santwona", "borrowedOn": new Date("2024-01-10"), "returnedOn": new Date("2024-02-02") }
    ],
    "tags": ["python", "coding", "reference"]
  },
  // ... include all 10 books similarly
]);

// =============================
// 2️⃣ READ Operations
// =============================
db.books.find();                                           // Show all books
db.books.find({ language: "English" });                   // Filter by language
db.books.find({ "author.name": "Dan Brown" });            // Filter by author
db.books.find({ publishedYear: { $gte: 2015 } });         // Books published after 2015
db.books.find().sort({ publishedYear: -1 });              // Sort by newest first

// =============================
// 3️⃣ UPDATE Operations
// =============================
db.books.updateOne({ title: "Digital Fortress" }, { $set: { availableCopies: 10 } });
db.books.updateMany({ publishedYear: { $lt: 2010 } }, { $inc: { availableCopies: 2 } });
db.books.updateOne({ title: "Atomic Habits" }, { $push: { tags: "psychology" } });

// =============================
// 4️⃣ DELETE Operations
// =============================
db.books.deleteOne({ title: "Zero to One" });
db.books.deleteMany({ availableCopies: { $lt: 3 } });

// =============================
// 5️⃣ FILTER & AGGREGATION Queries
// =============================
db.books.find({ genre: "Programming" });                   // All programming books
db.books.find({ "ratings.score": { $gt: 4.5 } });          // Highly rated books
db.books.find({ tags: { $in: ["motivation", "growth"] } });
db.books.aggregate([{ $group: { _id: "$language", totalBooks: { $sum: 1 } } }]); // Count by language
db.books.aggregate([{ $group: { _id: null, avgRating: { $avg: { $avg: "$ratings.score" } } } }]); // Avg rating
