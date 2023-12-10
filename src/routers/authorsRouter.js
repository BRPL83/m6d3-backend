import express from "express"
import { Author } from "../models/authors.js"
import { User } from "../models/users.js"

const authorsRouter = express.Router()

authorsRouter
    .get("/", async function (req, res, next) {
        try {
        const results = await Author.find({}).populate("userId", "-_id name email age");
        res.json(results)
    } catch (err) {
        next(err);
    }
})
    .post("/", async function (req, res, next) {
        try {
        const newUser = await User.create(req.body.user);
        const newAuthor = await Author.create({...req.body, userId: newUser._id });
        res.json(newAuthor);
        } catch (err) {
            next(err);
        }
    })
    .put("/:id", async function (req, res, next) {
        try {
        const updatedAuthor = await Author.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).populate("userId", "-_id name email age");
        res.json(updatedAuthor);
        } catch (err) {
            next(err);
        }
    })
    .delete("/:id", async function (req, res, next) {
        try {
        const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
        await User.findByIdAndDelete(deletedAuthor.userId);
        res.status(!deletedAuthor ? 404 : 204).send()
        } catch (err) {
            next(err);
        }
    });    

export default authorsRouter