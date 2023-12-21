const router = require('express').Router()
const db = require("../models")

const { Business, Comment, User } = db

router.post('/', async (req, res) => {
    try {
        const business = await Business.create(req.body);
        res.json(business);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

// Get all businesses
router.get('/', async (req, res) => {
    try {
        const businesses = await Business.findAll();
        res.json(businesses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


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

// Update business by ID
router.put('/:businessId', async (req, res) => {
    if (req.currentUser?.role !== 'admin') {
        return res.status(403).json({ message: 'You are not allowed to edit a place' })
    }

    let businessId = Number(req.params.businessId)

    if (isNaN(businessId)) {
        res.status(404).json({ message: `Invalid id "${businessId}"` })
    } else {
        try {
            const business = await Business.findOne({
                where: { businessId: businessId },
            });

            if (!business) {
                res.status(404).json({ message: `Could not find place with id "${businessId}"` })
            } else {
                Object.assign(business, req.body)
                await business.save()
                res.json(business)
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
})

// Delete business by ID
router.delete('/:businessId', async (req, res) => {
    if (req.currentUser?.role !== 'admin') {
        return res.status(403).json({ message: 'Ypu are not allowed to delete a place' })
    }

    let businessId = Number(req.params.businessId)

    if (isNaN(businessId)) {
        res.status(404).json({ message: `Invalid id "${businessId}"` })
    } else {
        try {
            const business = await Business.findOne({
                where: {
                    businessId: businessId
                }
            })

            if (!business) {
                res.status(404).json({ message: `Could not find place with id "${businessId}"` })
            } else {
                await business.destroy()
                res.json(business)
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
})

router.post('/:businessId/comments', async (req, res) => {
    const businessId = Number(req.params.businessId)

    req.body.rant = req.body.rant ? true : false

    try {
        const business = await Business.findOne({
            where: { businessId: businessId }
        })

        if (!business) {
            res.status(404).json({ message: `Could not find place with id "${businessId}"` })
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
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
            try {
                const comment = await Comment.findOne({
                    where: { commentId: commentId, businessId: businessId }
                });
    
                if (!comment) {
                    res.status(404).json({ message: `Could not find comment with id "${commentId}" for business with id "${businessId}"` });
                } else {
                    await comment.destroy();
                    res.json(comment);
                }
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
})


module.exports = router