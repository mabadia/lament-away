# Project Lament-Away created by Pablo Garcia Liam Bayley Ronald King and Miguel Angel Abadia 
We've created a project that piggy backs off the knowledge accumilated in our experience of the fields of frondend and backend to create a full stack app. Lament-away is an app that allows users to complain or recommend based on their experience of an old job. The user creates an account and signs in using a screen name to keep the users anonymous if they choose to do so.

## Prerequisites 

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Database ([PostgreSQL](https://www.postgresql.org/))

### Setup
First, you'll need a Postgres database to connect to. Follow instructions here to setup the database and save credentials for the next step.

Next create a `.env` file inside of `backend`. It will need to contain the following environment variables (change the values for the database to match what you defined in the previous step)
```
PORT=5000
DB_USERNAME=username 
DB_PASSWORD=password
DB_DATABASE=lament_away
```

Next `cd` into `backend` and run `npm install` to install dependencies for the API.

Next, `cd` into `frontend`, and run `npm install` to install dependencies for the React app.

Finally, in separate terminals, run `npm start` in each folder so that the API and React app are running at the same time.

### API (http://localhost:5000)
| Method | Path                                 | Purpose                                   |
| ------ | ------------------------------------ | ----------------------------------------- |
| GET    | /                                    | Home page                                 |
| GET    | /jobs                              | Business index page                         |
| POST   | /jobs                              | Create new Business                          |
| GET    | /jobs/:businessId                     | Details about a particular business          |
| PUT    | /jobs/:businessId                     | Update a particular business                 |
| DELETE | /jobs/:businessId                     | Delete a particular business                 |
| POST   | /jobs/:businessId/comments            | Create a comment about a particular business |
| DELETE | /jobs/:businessId/comments/:commentId | Delete a comment about a particular business |


### App (http://localhost:5000)
| Path                  | Component                 | Purpose                                                                         |
| --------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| /                     | `Home.js`                 | Home page                                                                       |
| /sign-up              | `users/SignUpForm.js`     | Form for creating a new user                                                    |
| /jobs               | `jobs/BusinessIndex.js`    | List of businesses                                                                  |
| /jobs/new           | `jobs/NewBusinessForm.js`  | Form for creating a new business                                                   |
| /jobs/:businessId      | `jobs/BusinessDetails.js`  | Details of a business, including it's comments, and a form to create a new comment |
| /jobs/:businessId/edit | `jobs/EditBusinessForm.js` | Form for editing a business                                                        |