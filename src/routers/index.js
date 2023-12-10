import express from "express"
import authorsRouter from "./authorsRouter.js"
import blogPostRouter from "./blogRouter.js"

const apiRouter = express.Router()

apiRouter.use("/authors", authorsRouter)
apiRouter.use("/blogPosts", blogPostRouter)

export default apiRouter