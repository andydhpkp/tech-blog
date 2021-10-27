const { Post } = require('../models')

const postData = [
    {
        title: 'The first post',
        content: 'Sed sed nisl sollicitudin, dictum nibh vitae, mattis sem. Curabitur volutpat nisi risus, ut porta velit rutrum ut. Donec rhoncus accumsan sem, quis fermentum tellus scelerisque id. Sed vel massa felis. Fusce pretium semper massa, eget commodo diam elementum id.',
        user_id: 1
    },
    {
        title: 'The second post',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare volutpat felis sit amet maximus. Phasellus nec dignissim enim, interdum fringilla justo. Vivamus facilisis, tortor nec mollis ullamcorper, massa erat efficitur ex, dignissim porta turpis nibh ut dui.',
        user_id: 2
    },
    {
        title: 'The third post',
        content: 'Nulla enim leo, lobortis ut metus eleifend, aliquet dapibus nisl. In at dolor efficitur, lobortis enim non, condimentum erat. Sed luctus eu libero nec volutpat. Suspendisse potenti. Duis consequat dui lacus, eget consequat nunc tristique eget.',
        user_id: 3
    },
    {
        title: 'The fourth post',
        content: 'Mauris eget libero feugiat, accumsan ex vel, varius urna. Praesent nec ex mauris. Morbi hendrerit dictum lorem eget mollis. Vestibulum nec pretium libero. Aliquam accumsan turpis et diam maximus vestibulum. Vestibulum sed pulvinar magna, et hendrerit felis.',
        user_id: 4
    },
    {
        title: 'The fifth post',
        content: 'Nullam libero metus, interdum vitae scelerisque eget, malesuada in elit. Nullam dictum dui nec est ullamcorper, non semper mauris lacinia. Proin feugiat tristique massa, quis tincidunt velit tincidunt vitae. Etiam orci urna, varius at leo eget, condimentum pharetra ex.',
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts