import express, { Request, Response } from "express";
import dotenv from "dotenv";
import {getHouse} from "./houses";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/:inputName", (request: Request, response: Response) => {
    const { inputName } = request.params;
    const houseName : string | undefined = getHouse(inputName);
    response.status(200).send(houseName);
});

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });