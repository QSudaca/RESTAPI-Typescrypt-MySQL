import express, { Request, Response } from "express";
import morgan from "morgan";
import postsRouter from "./routes/post.routes";

const app = express();

//setting
app.set("port", process.env.PORT);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router
app.get("/", (_req: Request, res: Response) => {
  res.send("working");
});
app.use("/api/posts", postsRouter);

export default app;
