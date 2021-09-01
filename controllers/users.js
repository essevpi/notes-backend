const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

usersRouter.get('/', async (req, res, next) => {
    try {
        const users = await User
            .find({})
            .populate('notes', { content: 1, date: 1 });
        res.json(users);
    } catch (exception) {
        next(exception);
    }
});

usersRouter.post('/', async (request, response, next) => {
    const body = request.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const user = new User({
        username: body.username,
        name: body.name,
        passwordHash,
    });

    try {
        const savedUser = await user.save();
        response.json(savedUser);
    } catch (exception) {
        next(exception);
    }
});

module.exports = usersRouter;