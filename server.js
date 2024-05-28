import express from "express"
import dotenv from "dotenv"
// import path from "path"
// import { fileURLToPath } from "url"
import postsRouter from "./routes/posts.js"
import logger from "./middleware/logger.js"
import errorHandler from "./middleware/error.js"
import notFound from "./middleware/notFound.js"

dotenv.config()
const port = process.env.PORT || 8080
const app = express()

// static dir
// const currentDir = path.dirname(fileURLToPath(import.meta.url))
// app.use(express.static(path.join(currentDir, "public")))

// body parsers
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// logging
app.use(logger)

// routes
app.use('/api/posts', postsRouter)

// error handlers
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port ${port}`))
