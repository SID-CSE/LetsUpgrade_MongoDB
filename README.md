# 🎬 Movie Database System (Mini Project)

[![Bootcamp: LetsUpgrade MongoDB 3 Days Bootcamp](https://img.shields.io/badge/Bootcamp-LetsUpgrade%20MongoDB%203%20Days-blue)](https://www.letsupgrade.in/)
[![Technology: MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)](https://www.mongodb.com/)
[![Author: Siddharth Kumar](https://img.shields.io/badge/Author-Siddharth%20Kumar-orange)](https://github.com/YourGitHubUsername) 
---

## 🎯 Project Overview

This mini-project demonstrates core **MongoDB concepts** using a **Movie Database System** scenario. It was developed as part of the **LetsUpgrade MongoDB 3 Days Bootcamp** to showcase practical application of MongoDB's document model and query language.

The project reinforces the following basic to intermediate MongoDB commands:
* Creating databases and collections.
* Inserting and querying multiple documents.
* **Complex Filtering, Sorting, Aggregation, and Grouping.**
* Projection to shape query results.

---

## ✨ Features and Objectives

The project focuses on creating and managing a rich movie database to perform:

1.  **Movie Data Management:** Insert and manage a comprehensive set of movie records.
2.  **Advanced Queries:** Execute complex queries like finding movies released after a specific year, sorting by box office, or grouping by genre.
3.  **Aggregation Pipelines:** Utilize the Aggregation Framework for data analysis and reporting.

---

## 💾 Sample Data Fields

The movie collection structure is designed to support rich queries, including nested and array data:

| Field | Example Data Point | Description |
| :--- | :--- | :--- |
| `_id` | ObjectId(...) | Unique identifier |
| `title` | "Inception" | Movie title |
| `year` | 2010 | Release year |
| `genres` | \[`'Sci-Fi'`, `'Action'`\] | Array of genres |
| `director` | {name: "C. Nolan", born: 1970} | Embedded director object |
| `cast` | \[`'L. DiCaprio'`, ...\] | Array of main cast members |
| `ratings` | \[`{source: 'IMDB', score: 8.8}'`\] | Array of rating objects |
| `boxOfficeUSD` | 828322476 | Total box office earnings |
| `awards` | {wins: 4, nominations: 12} | Embedded awards object |

---

## ⚙️ Setup and Execution Instructions

All necessary MongoDB commands are contained within the dedicated JavaScript file.

1.  **Open MongoDB Environment:** Start **MongoDB Compass** or open your **Mongo Shell** terminal.
2.  **Run Commands:** Copy and execute all the commands from the **`movie_database.js`** file.
3.  **Verify Queries:** Compare your query with the examples provided in **`sample_queries.txt`**.

---

## 📝 Example Query

The project file contains many examples, including this basic filtering and projection query:

```javascript
// Find movies released after 2015 showing title, year, and language only
db.movies.find(
    { year: { $gt: 2015 } },
    { title: 1, year: 1, language: 1, _id: 0 }
);
