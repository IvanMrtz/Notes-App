require("./mongo");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Note = require("./models/Note");
const catchErrors = require("./middleware/catchErrors");
const notFound = require("./middleware/notFound");
const { response } = require("express");
const { PORT } = process.env;

app.use(cors());
app.use(express.json());

app.get("/api/notes", (req, res, next) => {
  Note.find({})
    .then((notes) => {
      res.json(notes);
    })
    .catch(next);
});

app.get("/api/notes/:id", (req, res, next) => {
  const { id } = req.params;

  Note.findById(id)
    .then((note) => {
      if (note) return res.json(note);
      response.status(404).end();
    })
    .catch(next);
});

app.post("/api/notes", (req, res, next) => {
  const { title, description, likes } = req.body;

  const newNote = new Note({
    title,
    description,
    likes,
  });

  newNote
    .save()
    .then((savedNote) => {
      res.json(savedNote);
    })
    .catch(next);
});

app.put("/api/notes/:id", (req, res, next) => {
  const { id } = req.params;
  const { title, description, likes } = req.body;

  Note.findByIdAndUpdate(id, { title, description, likes }, { new: true })
    .then((note) => {
      res.json(note);
    })
    .catch(next);
});

app.delete("/api/notes/:id", (req, res, next) => {
  const { id } = req.params;

  Note.findByIdAndDelete(id).catch(next);
});

app.use(notFound);
app.use(catchErrors);

app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
