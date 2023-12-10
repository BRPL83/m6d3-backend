import mongoose, { Schema } from "mongoose"

const AuthorSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
})

export const Author = mongoose.model("authors", AuthorSchema)