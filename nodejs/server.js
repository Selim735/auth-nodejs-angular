const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const users = require('./routes/api/users');

// Middleware
app.use(cors()); // Appel correct de cors()
app.use(express.json()); // Permet de gérer les requêtes avec un corps JSON

// MongoDB Connection
const mongo_url = config.get("mongo_url");
mongoose.set('strictQuery', true);
mongoose
  .connect(mongo_url)
  .then(() => console.log("mongoDB connected ..."))
  .catch((err) => console.log(err));
  

// Routes
app.use("/api/users", users);

// Port configuration
const port = process.env.PORT || 3001; // Utilisez "PORT" au lieu de "port" (sensible à la casse)
app.listen(port, () => console.log(`Server running on port ${port}`));
