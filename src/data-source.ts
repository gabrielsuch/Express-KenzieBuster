import {DataSource} from "typeorm"
import dotenv from "dotenv"

dotenv.config()


export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DB_URI_DEV,
    ssl: {rejectUnauthorized: false},

    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"]
})

AppDataSource.initialize()
.then(() => {
    console.log("Data Source initialized")
})
.catch((err) => {
    console.error("Error during Data Source initialization", err)
})