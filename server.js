import { todoRouter } from "./todos.js";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
// Load environment variables
dotenv.config();

// Initialize express
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

console.log("db",process.env.MONGODB_URI)
// MongoDB Connection
mongoose
  .connect(
    `mongodb+srv://averys34:2yjGrnlcqxWJpy0C@todo-list.94gyl.mongodb.net/?retryWrites=true&w=majority&appName=ToDo-List`
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use routes
app.use('/api', todoRouter);

// Basic route
app.get("/", (req, res) => {
  res.json("it works");
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
