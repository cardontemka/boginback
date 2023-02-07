const { Schema, model } = require("mongoose");

const LinkSchema = new Schema(
    {
        url: {
            type: String,
            required: true,
        },
        short: {
            type: String,
            required: true,
        },
        author_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

const Link = model('Link', LinkSchema);
exports.Link = Link;