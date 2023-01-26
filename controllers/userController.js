const { User } = require("../models/userModel");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find(
            {},
            {
                password: 0,
            }
        ).populate('links');
        res.send(users);
    } catch (error) {
        res.send(error);
    }
}

exports.createUser = async (req, res) => {
    const { username, password, email } = req.body || {};

    if (!username || !password || !email)
        return res.send("username, password and email is required");

    try {
        const userDocument = new User({ username, password, email });
        const user = await userDocument.save();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
};

exports.createLink = async (req, res) => {
    const id = req.params.id;
    const { linkId } = req.body || {};
    try {
        const result = await User.findByIdAndUpdate(id, {
            $push: { links: linkId }
        });
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}