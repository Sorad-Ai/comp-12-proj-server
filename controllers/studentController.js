const Student = require('../models/Student');

exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

exports.createStudent = async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
};

exports.getStudentById = async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.json(student);
};

exports.updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.json(student);
};

exports.deleteStudent = async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.json({ message: 'Student deleted' });
};
