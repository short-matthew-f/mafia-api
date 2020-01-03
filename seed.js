const faker = require('faker')

const USERS = []
let currentUserId = 0

const makeUser = () => ({
  id: currentUserId++,
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.hacker.verb() + Math.floor(1000 + 9000 * Math.random()),
  avatarImg: faker.internet.avatar()
})

const makeUsers = () => {
  for(let i = 0; i < 15; i++) {
    USERS.push(makeUser())
  }
}

makeUsers()

const POSTS = []
let currentPostId = 0

const makePost = (userId) => ({
  id: currentPostId++,
  userId,
  title: faker.hacker.phrase(),
  content: [
    faker.company.catchPhrase(),
    faker.company.catchPhrase()
  ]
})

const makePosts = () => {
  USERS.forEach(user => {
    for(let i = 0; i < 2 + Math.floor(5 * Math.random()); i++) {
      POSTS.push(makePost(user.id))
    }
  })
}

makePosts()

const fs = require('fs')

fs.writeFileSync('./db.json', JSON.stringify({
  users: USERS,
  posts: POSTS
}))