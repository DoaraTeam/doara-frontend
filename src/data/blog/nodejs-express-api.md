---
title: "Building Modern APIs with Node.js and Express"
description: "A complete guide to creating RESTful APIs with Node.js"
author: "David Chen"
date: "2024-11-05"
tags: ["nodejs", "express", "api", "backend"]
image: "https://blog.postman.com/wp-content/uploads/2023/05/23PST0060-How-To-Create-a-REST-API-with-Node-js-and-Express-v1.jpg"
---

# Building Modern APIs with Node.js and Express

Node.js and Express provide a powerful foundation for building scalable APIs. Let's create a modern REST API from scratch.

## Setting Up

First, initialize your project:

```bash
mkdir my-api
cd my-api
npm init -y
npm install express dotenv cors helmet
```

## Basic Server Setup

Create your main server file:

```javascript
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## RESTful Routes

Implement CRUD operations:

```javascript
// Get all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Get single item
app.get("/api/items/:id", (req, res) => {
  const item = items.find((i) => i.id === req.params.id);
  if (!item) {
    return res.status(404).json({ error: "Not found" });
  }
  res.json(item);
});

// Create item
app.post("/api/items", (req, res) => {
  const newItem = {
    id: Date.now().toString(),
    ...req.body,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update item
app.put("/api/items/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Not found" });
  }
  items[index] = { ...items[index], ...req.body };
  res.json(items[index]);
});

// Delete item
app.delete("/api/items/:id", (req, res) => {
  items = items.filter((i) => i.id !== req.params.id);
  res.status(204).send();
});
```

## Error Handling

Implement comprehensive error handling:

```javascript
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    message: err.message,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
```

## Validation

Use validation middleware:

```javascript
const validateItem = (req, res, next) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({
      error: "Name and description are required",
    });
  }

  next();
};

app.post("/api/items", validateItem, (req, res) => {
  // Create item
});
```

## Authentication

Add JWT authentication:

```javascript
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
```

## Rate Limiting

Protect your API from abuse:

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use("/api/", limiter);
```

## Conclusion

You now have a solid foundation for building production-ready APIs with Node.js and Express. Remember to always validate input, handle errors properly, and secure your endpoints!
