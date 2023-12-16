// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
// middleware
app.use(cors());
app.use(express.json());

// Import controllers
const user = require('./controllers/user');
const jobs = require('./controllers/jobs');

// User routes
app.use('/users', userController);

// Other routes
app.get('/jobs', jobController.getAllJobs);
app.get('/jobs/:id', jobController.getJobById);
app.post('/jobs', jobController.createJob);
//default route
app.get('/', (req, res) => {
    res.send('Welcome to the backend!');
  });

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})