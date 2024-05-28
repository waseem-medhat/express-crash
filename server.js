import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const app = express()

// static dir
const currentDir = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(currentDir, "public")))

app.listen(8080, () => console.log(`Server is running on port 8080`))
