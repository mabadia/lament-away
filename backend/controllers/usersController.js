const router = require('express').Router();
// const db = require('../models');
const bcrypt = require('bcrypt');
const{  Comment } = require('../models'); 
const { User } = require('../models');


// const { User } = db

// Routes 
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Create new Comment
router.post('/comments', async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Get all Comments
router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/comments', async (req, res)  => ) 



// Get user by ID
router.get('/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findByPk(userId);
  
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
//create a new User
router.post('/', async (req, res) => {
    const { firstName, lastName, email, password, screenName } = req.body;

    try {
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password,
            screenName,
        });

        res.json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

router.post('/', async (req, res) => {
    let { password, ...rest } = req.body
    const user = await User.create({
        ...rest,
        role: 'review',
        passwordDigest: await bcrypt.hash(password, 10)
    })
    res.json(user)
})

router.post('/login', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
	var query = "SELECT title FROM user where username = '" + username + "' and password = '" + password + "'";

	console.log("username: " + username);
	console.log("password: " + password);
	console.log('query: ' + query);

	db.get(query, function (err, row) {

		if (err) {
			console.log('ERROR', err);
			res.redirect("/index.html#error");
		} else if (!row) {
			res.redirect("/index.html#unauthorized");
		} else {
			res.send('Hello <b>' + row.title + '!</b><br /> This file contains all your secret data: <br /><br /> SECRETS <br /><br /> MORE SECRETS <br /><br /> <a href="/index.html">Go back to login</a>');
		}
	});

});

module.exports = router;



