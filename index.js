import express from 'express';
import bodyParser from 'body-parser';

import studentRoutes from './routes/student.js';
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/student' , studentRoutes);
app.get('/' , (req , res) => {
  
    res.send('hello from home page');
} );



app.listen(PORT , () => console.log(`server running on port : http://localhost:${PORT}`));