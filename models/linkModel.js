const { Schema, model } = require("mongoose");

const linkSchema = new Schema({
    url: String,
    short: {type: String, require: true}
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }
})

const Link = model('Link', linkSchema);
exports.Link = Link;