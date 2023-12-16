// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
// Import controllers
const user = require('./controllers/usersController');
// const jobs = require('./controllers/jobs');

// User routes
app.use('/users', require('./controllers/usersController'));

const user = require('./controllers/users');
const jobs = require('./controllers/jobs');

// User routes
app.use('/users');


// Other routes
// app.get('/jobs', jobController.getAllJobs);
// app.get('/jobs/:id', jobController.getJobById);
// app.post('/jobs', jobController.createJob);
//default route
app.get('/', (req, res) => {
    res.send('Welcome to the backend!');
  });

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})

