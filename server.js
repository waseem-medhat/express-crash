import express from "express"
import dotenv from "dotenv"
// import path from "path"
// import { fileURLToPath } from "url"
import postsRouter from "./routes/posts.js"

dotenv.config()
const port = process.env.PORT || 8080
const app = express()

// static dir
// const currentDir = path.dirname(fileURLToPath(import.meta.url))
// app.use(express.static(path.join(currentDir, "public")))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/posts', postsRouter)
app.listen(port, () => console.log(`Server is running on port ${port}`))
