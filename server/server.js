const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect('mongodb://localhost/MERN_STACK_APP', { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
})
    
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
    
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
    
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
