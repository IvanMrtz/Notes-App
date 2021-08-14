const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const noteSchema = new Schema({
  title: String,
  description: String,
  likes: Number,
});

noteSchema.set("toJSON", { transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id;
  delete returnedObject._id;
  delete returnedObject.__v;
}});

const Note = model("Note", noteSchema);

module.exports = Note;