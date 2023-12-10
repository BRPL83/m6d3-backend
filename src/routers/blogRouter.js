import express from "express"
import { BlogPost } from "../models/blogPost.js"

const blogPostRouter = express.Router()

blogPostRouter
    .get("/", async function (req, res, next) {
        try {
        const blogPosts = await BlogPost.find({}).populate(
            "authorUserId",
            "-_id name email age");
        res.json(blogPosts);
    } catch (err) {
        next(err);
    }
})
    .post("/", async function (req, res, next) {
        try {
            const newBlogPost = await BlogPost.create(req.body);
            res.json(newBlogPost);
        } catch (err) {
            next(err);
        }
    })
    .put("/:id", async function (req, res, next) {
        try {
        const updatedBlogPost = await BlogPost.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        ).populate("authorUserId", "-id name email age");
        res.json(updatedBlogPost);
    } catch (err) {
        next(err);
    }
})
    .delete("/:id", async function (req, res, next) {
        try {
            const deletedBlogPost = await BlogPost.findByIdAndDelete(req.params.id);
            res.status(!deletedBlogPost ? 404 : 204).send();
        } catch (err) {
            next(err);
        }
    });

export default blogPostRouter;