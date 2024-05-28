import express from "express"
import dotenv from "dotenv"
// import path from "path"
// import { fileURLToPath } from "url"

dotenv.config()
const port = process.env.PORT || 8080
const app = express()

// static dir
// const currentDir = path.dirname(fileURLToPath(import.meta.url))
// app.use(express.static(path.join(currentDir, "public")))

let posts = [
    { id: 1, title: "Hello" },
    { id: 2, title: "Goodbye" },
    { id: 3, title: "Hello" },
    { id: 4, title: "Goodbye" },
]

app.get('/api/posts', (req, res) => {
    const limit = parseInt(req.query.limit)
    res.json(isNaN(limit) ? posts : posts.slice(0, limit))
})

app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.filter(p => p.id === id)[0]
    res.json(post)
})

app.listen(port, () => console.log(`Server is running on port ${port}`))
