const router = require('express').Router()
const sequelize = require('../../config/connection')
const { Post, User, Comment } = require('../../models')
const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
    console.log('------------------')
    Post.findAll({
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [
            //include comment
            {
                model: Comment,
                attributes: ['id', 'text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(dbPost => res.json(dbPost))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'content',
            'created_at'
        ],
        include: [
            //include comment
            {
                model: Comment,
                attributes: ['id', 'text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPost => {
        if (!dbPost) {
            res.status(404).json({ message: 'No post found with this id' })
            return
        }
        res.json(dbPost)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.post('/', withAuth, (req, res) => {
    Post.create({
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    })
    .then(dbPost => res.json(dbPost))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.put('/:id', withAuth, (req, res) => {
    Post.update(
        {
            title: req.body.title
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPost => {
        if (!dbPost) {
            res.status(404).json({ message: 'No post found with this id' })
            return
        }
        res.json(dbPost)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id)
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPost => {
        if (!dbPost) {
            res.status(404).json({ message: 'No post found with this id' })
            return
        }
        res.json(dbPost)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

module.exports = router