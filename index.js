const express = require("express")
const app = express()
const cors = require("cors")

const connectMonogDB = require("./mongoDB/connection")
const blog = require("./mongoDB/model")


app.listen(3000, async () => {
    await connectMonogDB()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get("/", () => {
    res.send("api is running")
})

app.post("/create", async (req, res) => {
    try {
        const { title, cover, content } = req.body
        if (!title || !cover || !content) {
            res.send("can not create")
        } else {
            await blog.create({ title, cover, content })
            res.send("created")
        }
    } catch (error) {
        res.send(error)
    }
})

app.get("/read", async (req, res) => {
    const db = await blog.find()
    res.send(JSON.stringify(db))
})

app.get("/readId/:id", async (req, res) => {
    const db = await blog.findById(req.params.id)
    res.send(JSON.stringify(db))
})

app.put("/update/:id", async (req, res) => {
    await blog.findByIdAndUpdate(req.params.id, req.body)
    res.send(`${req.params.id} is updated`)
})

app.delete("/delete/:id", async (req, res) => {
    await blog.findByIdAndDelete(req.params.id)
    res.send(`${req.params.id} is deleted`)
})
