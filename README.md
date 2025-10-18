# 🚀 LetsUpgrade MongoDB 3 Days Bootcamp: Mini-Projects Repository

[![Bootcamp: LetsUpgrade MongoDB 3 Days Bootcamp](https://img.shields.io/badge/Bootcamp-LetsUpgrade%20MongoDB%203%20Days-blue)](https://www.letsupgrade.in/)
[![Technology: MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)](https://www.mongodb.com/)
[![Author: Siddharth Kumar](https://img.shields.io/badge/Author-Siddharth%20Kumar-orange)](https://github.com/YourGitHubUsername) 
[![Projects: 2 Mini-Projects](https://img.shields.io/badge/Projects-2%20Mini--Projects-red)](#mini-project-overviews)

---

## 💡 What is MongoDB?

**MongoDB** is a popular, open-source **NoSQL database** that uses a document-oriented data model. It's designed for flexibility and scalability, making it an excellent choice for modern applications.

Unlike traditional relational databases (like SQL), MongoDB stores data in flexible, JSON-like documents called **BSON** (Binary JSON) rather than rigid rows and columns.

### Key MongoDB Concepts

* **Document:** The basic unit of data (a set of key-value pairs). Documents are dynamic and can have varying fields.
* **Collection:** A group of documents. This is analogous to a table in a relational database.
* **Database:** A physical container for collections.

---

## 🛠️ Core MongoDB Operations Demonstrated

Both mini-projects were designed to showcase a comprehensive range of MongoDB capabilities, moving from basic data manipulation to advanced analytical queries.

### 1. Basic Data Operations (CRUD)

| Operation | MongoDB Method | Description | Demonstrated In |
| :--- | :--- | :--- | :--- |
| **C**reate | `db.collection.insertOne()` / `insertMany()` | Adding new documents (records) to a collection. | Both Projects |
| **R**ead | `db.collection.find()` | Querying and retrieving documents based on criteria (filtering). | Both Projects |
| **U**pdate | `db.collection.updateOne()` / `updateMany()` | Modifying existing documents. | Both Projects |
| **D**elete | `db.collection.deleteOne()` / `deleteMany()` | Removing documents from a collection. | Both Projects |

### 2. Advanced Operations

| Operation | MongoDB Method | Key Skill Demonstrated |
| :--- | :--- | :--- |
| **Aggregation** | `db.collection.aggregate()` | Performing complex data processing, like calculating sums, averages, grouping by fields, and running multi-stage pipelines. |
| **Filtering/Sorting** | `$lt`, `$gt`, `$eq`, `$sort` | Advanced querying using comparison and logical operators, and ordering results by metrics (e.g., box office, publication year). |
| **Projection** | `{ field: 1, _id: 0 }` | Shaping query results to include or exclude specific fields for clean, targeted output. |

---

## 📚 Mini-Project Overviews

This repository contains two distinct mini-projects developed to solidify the skills learned during the bootcamp by applying them to real-world scenarios.

### 1. 📖 Library Management System

| Detail | Description |
| :--- | :--- |
| **Focus** | Managing **book records** with complex data structures like embedded documents (`Author details`) and arrays (`Borrowed History`, `Ratings`). |
| **Key Skill** | Advanced **CRUD operations** and writing **Aggregation Queries** to analyze library statistics (e.g., total books per genre, average ratings per publisher). |
| **File** | `Library_Management_System_MiniProject.js` |
| **Dedicated README** | [**Library Management System README**](https://github.com/SID-CSE/LetsUpgrade_MongoDB/blob/Movie_Database_System/README.md) |

### 2. 🎬 Movie Database System

| Detail | Description |
| :--- | :--- |
| **Focus** | Building a comprehensive **movie database**, including details on cast, director, box office, and awards. |
| **Key Skill** | Complex **filtering** and **sorting** queries, and using the **Aggregation Framework** to group movies by genre or analyze data points like awards and box office revenue. |
| **File** | `movie_database.js` |
| **Dedicated README** | [**Movie Database System README**](https://github.com/SID-CSE/LetsUpgrade_MongoDB/blob/Movie_Database_System/README.md) |

---

## ⚙️ Setup and Execution Instructions

To run the commands for either project, you will need **MongoDB** installed (locally or via a cloud service like Atlas) and a way to execute the commands.

1.  **Prerequisites:** Ensure you have the **MongoDB Server** running and the **Mongo Shell** or **MongoDB Compass** installed.
2.  **Clone Repository:** Download or clone this repository to your local machine.
3.  **Run Commands:**
    * Open your Mongo Shell.
    * Use the `load()` command to execute the project files:
        ```bash
        # For the Library Project
        load('Library_Management_System_MiniProject.js')

        # For the Movie Project
        load('movie_database.js')
        ```

---

## 👨‍💻 Author

**Siddharth Kumar**

* **Bootcamp:** LetsUpgrade MongoDB 3 Days Bootcamp
* **Created Date:** October 2025
* **License:** MIT License (or appropriate license)
