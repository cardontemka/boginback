const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

UserSchema.virtual("links", {
    ref: "Link",
    localField: "_id",
    foreignField: "author_id",
})

const User = model('User', UserSchema);
exports.User = User;