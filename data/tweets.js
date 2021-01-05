const uuid = require('uuid');

module.exports = [
  {
    id: uuid.v4().toString(),
    user: 'max',
    message: 'Friends don’t lie. Don’t take it so personally, okay? I don’t like most people. He’s in the vast majority. This is not yours to fix alone.',
    createdAt: new Date('12-18-2020 10:00:00'),
    fav: true
  },
  {
    id: uuid.v4().toString(),
    user: 'once',
    message: 'Do you know anything about sensory deprivation tanks? Specifically how to build one?',
    createdAt: new Date('12-18-2020 11:00:00'),
    fav: false
  }
]
