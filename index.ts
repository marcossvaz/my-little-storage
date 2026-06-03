import express, { json } from "express";
import { routes } from "./src/routes/routes.js";
import dotenv from "@dotenvx/dotenvx"

export const app = express();

app.use(express.json());
app.use(routes);

dotenv.config()

app.listen(process.env.PORT, () => {
    console.log("My Serve is running: 🏃💨")
})

