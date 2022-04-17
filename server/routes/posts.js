import express from "express";
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/getPosts", getPosts);
router.post("/createPost", createPosts);
router.patch("/updatePost/:id", updatePost);
router.delete("/deletePost/:id", deletePost);
router.patch("/updatePost/:id/likePost", likePost);

export default router;
