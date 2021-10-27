const { Comment } = require('../models')

const commentData = [
    {
        text: 'This is the first comment',
        user_id: 1,
        post_id: 5
    },
    {
        text: 'This is the second comment',
        user_id: 2,
        post_id: 4
    },
    {
        text: 'This is the third comment',
        user_id: 3,
        post_id: 3
    },
    {
        text: 'This is the fourth comment',
        user_id: 4,
        post_id: 2
    },
    {
        text: 'This is the fifth comment',
        user_id: 5,
        post_id: 1
    }
]

const seedComments = () => Comment.bulkCreate(commentData)

module.exports = seedComments