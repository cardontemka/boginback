const shortid = require("shortid");
const { Link } = require("../models/linkModel");

exports.postLink = async (req, res) => {
    const { url, author_id } = req.body || {};

    try {
        const link = new Link({
            url,
            author_id,
            short: shortid.generate()
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

exports.deleteLink = async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Link.findByIdAndDelete(id);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

exports.getShortLink = async (req, res) => {
    try {
        const shortLink = await Link.findOne({ short: req.params.id });
        if (shortLink == null) return res.status(404);
        res.redirect(shortLink.url);
    } catch (error) {
        res.send(error)
    }
};