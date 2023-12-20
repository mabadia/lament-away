const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')


const { User } = db

  
  
router.post('/', async (req, res) => {
    let user = await User.findOne({
        where: { user_email: req.body.user_email }
    })

    console.log(user)
})





// router.get('/profile', async (req, res) => {
    
//     try {
//      let user = await User.findOne({
//          where: {
//              id: req.session.id
//          }
         
//      })
//         res.json(user)
//     } catch {
//         res.json(null)
//         console.log(req.session.id)
//     }
// })


module.exports = router
