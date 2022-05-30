import express from "express"
import { routes } from "./routes"


const app = express()

const port = process.env.PORT ?? 3000

app.use(express.json())

routes(app)

app.listen(port, () => {
    console.log(`Running on localhost:${port}`)
})
