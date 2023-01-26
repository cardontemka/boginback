const { Schema, model } = require("mongoose")

const linkSchema = new Schema({
    url: String,
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }
})

const Link = model('Link', linkSchema);
exports.Link = Link;