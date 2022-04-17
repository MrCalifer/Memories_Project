import express from "express";
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/getPosts", getPosts);
router.post("/createPost", createPosts);
router.patch("/updatePost/:id", updatePost);
router.delete("/deletePost/:id", deletePost);

export default router;
