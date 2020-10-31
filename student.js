import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();


let student = [
    {
        id : 1,
        name : "Nikita",
        emailid : "niki34@gmail.com",
        contactno: 9814567890,
        course : "MCA"
    },
    {
        id : 2,
        name : "shweta",
        emailid : "shweta4@gmail.com",
        contactno: 9814567780,
        course : "MCA"
    }


]



router.get('/' , (req , res) => {
   
    res.send(student);
});

router.post('/' , (req , res) => {
   const students = req.body;
    student.push(students);
    res.send(`student with the name ${students.name} added to the database`);
});


router.get('/:id' , (req , res) => {
    const {id} = req.params;
   const foundstudent= student.find((students) => students.id ==id)
    res.send(foundstudent);
});

router.delete('/:id' , (req , res) => {
    const {id} = req.params;
    student = student.filter((students) => students.id != id);
    res.send(`user with id ${id} deleted `);
});

router.patch('/:id' , (req , res) => {
    const {id} = req.params;
    const students = student.find((students) => students.id == id);
    res.send(student);
});

export default router;