import { Router } from 'express'

const router = Router()

let posts = [
    { id: 1, title: "Hello" },
    { id: 2, title: "Goodbye" },
    { id: 3, title: "Hello" },
    { id: 4, title: "Goodbye" },
]

router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit)

    return res
        .status(200)
        .json(isNaN(limit) ? posts : posts.slice(0, limit))
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(p => p.id === id)

    if (!post) {
        return res
            .status(404)
            .json({ message: `no post with id ${id}` })

    }

    return res
        .status(200)
        .json({ post })
})

router.post('/', (req, res) => {
    console.log(req.body)
    const newPost = {
        id: req.body.title.length * 10 + 2,
        title: req.body.title
    }

    if (!newPost.title) {
        return res
            .status(400)
            .json({ message: "please include title" })
    }

    posts.push(newPost)

    return res
        .status(201)
        .json(posts)
})

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(p => p.id === id)

    if (!post) {
        return res
            .status(404)
            .json({ message: `no post with id ${id}` })
    }

    post.title = req.body.title

    res
        .status(200)
        .json({post})
})

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    posts = posts.filter(p => p.id !== id)

    res
        .status(200)
        .json(posts)
})

export default router
