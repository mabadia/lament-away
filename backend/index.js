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
<<<<<<< HEAD
const user = require('./controllers/usersController');
// const jobs = require('./controllers/jobs');

// User routes
app.use('/users', require('./controllers/usersController'));
=======
const user = require('./controllers/users');
const jobs = require('./controllers/jobs');

// User routes
app.use('/users');
>>>>>>> refs/remotes/origin/main

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
<<<<<<< HEAD
    console.log(`Listening on ${3000}`)
})
=======
    console.log(`Listening on ${process.env.PORT}`)
})

// {
//   "dependencies": {
//     "body-parse": "^0.1.0",
//     "cors": "^2.8.5",
//     "dotenv": "^16.3.1",
//     "express": "^4.18.2",
//     "express-react-views": "^0.11.0",
//     "method-override": "^3.0.0",
//     "nodemon": "^3.0.2",
//     "pg": "^8.11.3",
//     "pg-hstore": "^2.3.4",
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "sequelize": "^6.35.2",
//     "sequelize-cli": "^6.6.2"