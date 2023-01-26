const { Link } = require("../models/linkModel");

exports.postLink = async (req, res) => {
    const { url } = req.body || {};

    try {
        const link = new Link({
            url
        });
        await link.save();
        res.send(link);
    } catch (error) {
        res.send(error);
    }
};

exports.getLinks = async (req, res) => {
    try {
        const link = await Link.find({});
        res.send(link);
    } catch (error) {
        res.send(error);
    }
};