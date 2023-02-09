const { generateToken } = require("../common/generateToken");
const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password)
    return res.status(400).send("email, password and email is required");

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const userDocument = new User({
      email,
      password: encryptedPassword,
    });
    const user = await userDocument.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password)
    return res.status(400).send("email, password and email is required");
  try {
    const user = await User.findOne({ email });

    const token = generateToken({ email, password });

    const isEqual = await bcrypt.compare(password, user.password);
    if (isEqual) return res.send({ user: user , token: token });

    res.status(400).send("Your password is incorrect");
  } catch (error) {
    res.status(400).send("User not found");
  }
};
