import express, { Request, Response } from "express";
import dotenv from "dotenv";
import {sortingHat} from "./sorting";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/:name", (request: Request, response: Response) => {
    const {name} = request.params;
  response.status(200).send(sortingHat(name));
  console.log(name)
});


app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });