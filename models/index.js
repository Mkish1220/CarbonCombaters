const User = require('./user');
const NewQuestions = require('./newQuestions');

User.hasMany(NewQuestions, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

NewQuestions.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, NewQuestions };