const sequelize = require('../config/connection')
const { User } = require('../models')

const userData = [
    {
        username: 'flea',
        password: 'sidif45'
    },
    {
        username: 'frusciante',
        password: 'frusciante321rocks'
    },
    {
        username: 'Bruce',
        password: 'AmityIsl3nd'
    },
    {
        username: 'LancedTrey',
        password: 'patsFuture'
    },
    {
        username: 'LastexampLe',
        password: 'finalPassword'
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true})

module.exports = seedUsers