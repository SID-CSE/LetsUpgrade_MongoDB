// =============================
// LETSUPGRADE MONGODB 3 DAYS BOOTCAMP
// MINI PROJECT: MOVIE DATABASE SYSTEM
// =============================

// 1️⃣ Create Database & Collection
use movieDB;
db.createCollection("movies");

// 2️⃣ Insert Sample Data
db.movies.insertMany([
  {
    "_id": 1,
    "title": "Midnight Run",
    "year": 2015,
    "genres": ["Drama", "Thriller"],
    "director": { "name": "Asha Rao", "born": 1976 },
    "cast": ["Ravi Kumar", "Maya Sen", "Arjun Roy"],
    "runtimeMin": 128,
    "language": "Hindi",
    "country": "India",
    "ratings": [{ "source": "IMDb", "score": 7.4 }, { "source": "Critic", "score": 8 }],
    "boxOfficeUSD": 4200000,
    "budgetUSD": 1500000,
    "released": ISODate("2015-08-21T00:00:00Z"),
    "awards": { "wins": 2, "nominations": 5 },
    "tags": ["road", "revenge"]
  },
  {
    "_id": 2,
    "title": "Celestial",
    "year": 2018,
    "genres": ["Sci-Fi", "Adventure"],
    "director": { "name": "Marcus Li", "born": 1980 },
    "cast": ["Evelyn Park", "Tomás Silva"],
    "runtimeMin": 140,
    "language": "English",
    "country": "USA",
    "ratings": [{ "source": "IMDb", "score": 8.2 }, { "source": "RottenTomatoes", "score": 88 }],
    "boxOfficeUSD": 98000000,
    "budgetUSD": 40000000,
    "released": ISODate("2018-11-02T00:00:00Z"),
    "awards": { "wins": 6, "nominations": 11 },
    "tags": ["space", "epic"]
  },
  // ... include all 10 movies similarly
]);

// =============================
// 2️⃣ READ Operations
// =============================
db.movies.find();                                          // Show all movies
db.movies.find({ language: "Hindi" });                    // Filter by language
db.movies.find({ "director.name": "Asha Rao" });          // Filter by director
db.movies.find({ year: { $gte: 2015 } });                 // Movies released after 2015
db.movies.find().sort({ year: -1 });                      // Sort by newest first

// =============================
// 3️⃣ UPDATE Operations
// =============================
db.movies.updateOne({ title: "Celestial" }, { $set: { "ratings.0.score": 7.7 } });

// =============================
// 4️⃣ DELETE Operations
// =============================
db.movies.deleteMany({ year: { $lt: 2015 } });

// =============================
// 5️⃣ FILTER & AGGREGATION Queries
// =============================
db.movies.find({ genres: "Sci-Fi" });                     // Filter by genre
db.movies.find({ "ratings.score": { $gt: 8 } });          // Highly rated movies
db.movies.find({ tags: { $in: ["revenge", "suspense"] } });
db.movies.aggregate([{ $group: { _id: "$language", totalMovies: { $sum: 1 } } }]); // Count by language
db.movies.aggregate([{ $group: { _id: null, avgBoxOfficeUSD: { $avg: "$boxOfficeUSD" } } }]); // Avg box office
