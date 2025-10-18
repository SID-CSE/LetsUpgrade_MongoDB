# 📚 Library Management System (Mini Project)

[![Bootcamp: LetsUpgrade MongoDB 3 Days Bootcamp](https://img.shields.io/badge/Bootcamp-LetsUpgrade%20MongoDB%203%20Days-blue)](https://www.letsupgrade.in/)
[![Technology: MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)](https://www.mongodb.com/)
[![Author: Siddharth Kumar](https://img.shields.io/badge/Author-Siddharth%20Kumar-orange)](https://github.com/YourGitHubUsername) 
---

## 🎯 Project Overview

This mini-project demonstrates core **MongoDB concepts** using a **Library Management System** scenario. It was developed as part of the **LetsUpgrade MongoDB 3 Days Bootcamp** to showcase practical application of MongoDB's document model and query language.

The primary focus is on implementing **CRUD (Create, Read, Update, Delete) operations** and performing advanced **Aggregation Queries** to manage book records effectively.

---

## ✨ Features and Objectives

* **CRUD Operations:** Implement basic operations for inserting, reading, updating, and deleting book records.
* **Data Filtering:** Perform complex **read and filter** queries on the book collection.
* **Advanced Aggregation:** Execute aggregate queries to calculate metrics like:
    * Total number of books per genre.
    * Average ratings for specific publishers.
    * Books borrowed history analysis.

---

## 💾 Data Schema & Structure

The sample book data includes a rich set of fields to facilitate complex querying:

| Field | Description | Type Example |
| :--- | :--- | :--- |
| `title` | Title of the book | String |
| `author` | Author details (name, born year) | Object/Embedded Document |
| `genre` | Book category | Array/String |
| `publisher` | Publishing company | String |
| `publishedYear` | Year of publication | Integer |
| `pages` | Total page count | Integer |
| `language` | Original language of the book | String |
| `availableCopies` | Current stock | Integer |
| `ratings` | Array of rating objects | Array of Objects |
| `borrowedHistory` | List of past borrows | Array |
| `tags` | Keywords for categorization | Array |

---

## ⚙️ Setup and Execution Instructions

All necessary MongoDB commands are contained within the dedicated JavaScript file.

1.  **Open MongoDB Environment:** Start **MongoDB Compass** or open your **Mongo Shell** terminal.
2.  **Select Database:** Run the following command to create and use the project's database:
    ```bash
    use libraryDB
    ```
3.  **Run Commands:** Execute all the commands found in the **`Library_Management_System_MiniProject.js`** file.
4.  **Explore:** Begin exploring the data by executing your own CRUD and filtering operations!

---

## 📄 Files Included

| File | Description |
| :--- | :--- |
| **`Library_Management_System_MiniProject.js`** | **The main script** containing all MongoDB insert, CRUD, and aggregation commands. |
| `README.md` | This project documentation file. |

---

## 👨‍💻 Author

**Siddharth Kumar**

* **Bootcamp:** LetsUpgrade MongoDB 3 Days Bootcamp
* **Created Date:** October 2025 (Assumed)

---
