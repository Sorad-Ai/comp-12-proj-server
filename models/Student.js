const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  class: { type: String, required: true, enum: ['one', 'two', 'three', 'four', 'five'] },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  marks: { type: Number, required: true },
});

module.exports = mongoose.model('Student', StudentSchema);
