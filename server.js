const express = require('express');
const connectDB = require('./config/db'); 
const taskroutes = require('./routes/taskroutes');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/tasks', taskroutes);

app.get('/', (req, res) => {
  res.send('Hello, MongoDB Atlas!');
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});