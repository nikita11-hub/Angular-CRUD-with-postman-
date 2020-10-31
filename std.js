import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    id : String,
    name : String,
    emailid : String,
    contactno: String,
    course : String
});

module.exports = mongoose.model('student' ,studentSchema  );