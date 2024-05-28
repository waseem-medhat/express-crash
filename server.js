import express from "express"

const app = express()

app.get('/', (_, res) =>{
    res.send({message: "nice"})
})

app.get('/about', (_, res) =>{
    res.send("About")
})

app.listen(8080, () => console.log(`Server is running on port 8080`))
