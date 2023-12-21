const router = require('express').Router()
const db = require("../models")

const { Business, Comment, User } = db

router.post('/', async (req, res) => {
    // if(req.currentUser?.role !== 'admin'){
    //     return res.status(403).json({message: 'You are not allowed to add a place'})
    // }
    
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    console.log(req.body)
    const business = await Business.create(req.body)
    
    res.json(business)
})


router.get('/', async (req, res) => {
    const businesses = await Business.findAll()
    
    res.json(businesses)
})


router.get('/:businessId', async (req, res) => {
    let businessId = Number(req.params.businessId)
    if (isNaN(businessId)) {
        res.status(404).json({ message: `Invalid id "${businessId}"` })
    } else {
        const business = await Business.findOne({
            where: { businessId: businessId },
            include: {
                association: 'comments',
                include: 'author'
            }
        })
        if (!business) {
            res.status(404).json({ message: `Could not find business with id "${businessId}"` })
        } else {
            res.json(business)
        }
    }
})

router.put('/:businessId', async (req, res) => {
    if(req.currentUser?.role !== 'admin'){
        return res.status(403).json({message: 'You are not allowed to edit a business'})
    }
    let businessId = Number(req.params.businessId)
    if (isNaN(businessId)) {
        res.status(404).json({ message: `Invalid id "${businessId}"` })
    } else {
        const business = await Business.findOne({
            where: { businessId: businessId },
        })
        if (!business) {
            res.status(404).json({ message: `Could not find business with id "${businessId}"` })
        } else {
            Object.assign(business, req.body)
            await business.save()
            res.json(business)
        }
    }
})

router.delete('/:businessId', async (req, res) => {
    if(req.currentUser?.role !== 'admin'){
        return res.status(403).json({message: 'Ypu are not allowed to delete a business'})
    }
    let businessId = Number(req.params.businessId)
    if (isNaN(businessId)) {
        res.status(404).json({ message: `Invalid id "${businessId}"` })
    } else {
        const business = await Business.findOne({
            where: {
                businessId: businessId
            }
        })
        if (!business) {
            res.status(404).json({ message: `Could not find business with id "${businessId}"` })
        } else {
            await business.destroy()
            res.json(business)
        }
    }
})

router.post('/:businessId/comments', async (req, res) => {
    const businessId = Number(req.params.businessId)

    req.body.rant = req.body.rant ? true : false

    const business = await Business.findOne({
        where: { businessId: businessId }
    })

    if (!business) {
        res.status(404).json({ message: `Could not find business with id "${businessId}"` })
    }

    const author = await User.findOne({
        where: { userId: req.body.authorId }
    })

    if (!author) {
        res.status(404).json({ message: `Could not find author with id "${req.body.authorId}"` })
    }

    const comment = await Comment.create({
        ...req.body,
        businessId: businessId
    })

    res.send({
        ...comment.toJSON(),
        author
    })
})

router.delete('/:businessId/comments/:commentId', async (req, res) => {
    let businessId = Number(req.params.businessId)
    let commentId = Number(req.params.commentId)

    if (isNaN(businessId)) {
        res.status(404).json({ message: `Invalid id "${businessId}"` })
    } else if (isNaN(commentId)) {
        res.status(404).json({ message: `Invalid id "${commentId}"` })
    } else {
        const comment = await Comment.findOne({
            where: { commentId: commentId, businessId: businessId }
        })
        if (!comment) {
            res.status(404).json({ message: `Could not find comment with id "${commentId}" for business with id "${businessId}"` })
        } else {
            await comment.destroy()
            res.json(comment)
        }
    }
})


module.exports = router