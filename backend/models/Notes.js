const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const NotesSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    id: {type: String, required: true}
})

const NotesModel = model("notes", NotesSchema);
module.exports = NotesModel;