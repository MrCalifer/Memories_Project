import express from "express";
import { getPosts, createPosts, updatePost } from "../controllers/posts.js";

const router = express.Router();

router.get("/getPosts", getPosts);
router.post("/createPost", createPosts);
router.patch("/updatePost/:id", updatePost);

export default router;
