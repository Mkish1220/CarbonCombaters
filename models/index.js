const User = require('./User');
const NewQuestions = require('./newQuestions')

User.hasMany(NewQuestions, {
    foreignKey: 'user_id'
})

NewQuestions.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, NewQuestions };