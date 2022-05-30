import {DataSource} from "typeorm"
import dotenv from "dotenv"
import path from "path"

dotenv.config()


export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URI_DEV,
    ssl: {rejectUnauthorized: false},

    entities: [path.join(__dirname, "./entities/**/*.{js,ts}")],
    migrations: [path.join(__dirname, "./migrations/**/*.{js,ts}")],
})

AppDataSource.initialize()
.then(() => {
    console.log("Data Source initialized")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})