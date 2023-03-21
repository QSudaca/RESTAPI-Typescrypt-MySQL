import { Request, Response } from "express";
import { Post } from "../interface/Post";
import connect from "../database";

export async function getAllPosts(req: Request, res: Response) {
  try {
    const connection = await connect();
    const posts = await connection.query("SELECT * FROM posts");
    return res.status(200).send(posts[0]);
  } catch (error) {
    return res.status(400).json({ message: `Error: ${error}` });
  }
}

export async function getPost(req: Request, res: Response) {
  try {
    const id: number = +req.params.id;
    const connection = await connect();
    const post = await connection.query(`SELECT * FROM posts WHERE id = ${id}`);
    return res.status(200).json(post[0]);
  } catch (error) {
    return res.status(400).json({ message: `Error: ${error}` });
  }
}

export async function createPost(req: Request, res: Response) {
  try {
    const newPost: Post = req.body;
    const connection = await connect();
    const post = await connection.query("INSERT INTO posts SET ?", [newPost]);
    return res.status(200).json({ message: "Post created successfully" });
  } catch (error) {
    return res.status(400).json({ message: `Error: ${error}` });
  }
}

export async function updatePost(req: Request, res: Response) {
  try {
    const id: number = +req.params.id;
    const updatedPost: Post = req.body;
    const connection = await connect();
    const update = await connection.query("UPDATE posts set ? WHERE id = ?", [
      updatedPost,
      id,
    ]);
    return res
      .status(200)
      .json({ message: `Post ${id}, updated successfully` });
  } catch (error) {
    return res.status(400).json({ message: `Error: ${error}` });
  }
}

export async function deletePost(req: Request, res: Response) {
  try {
    const id: number = +req.params.id;
    const connection = await connect();
    await connection.query("DELETE FROM posts WHERE id = ?", [id]);
    return res
      .status(200)
      .json({ message: `Post id: ${id} deleted successfully` });
  } catch (error) {
    return res.status(400).json({ message: `Error: ${error}` });
  }
}
