import express from "express";
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likePost,
  getPostsBySearch,
  getPostByID
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/getPosts", getPosts);
router.get("/:id", getPostByID);
router.post("/createPost", auth, createPosts);
router.patch("/updatePost/:id", auth, updatePost);
router.delete("/deletePost/:id", auth, deletePost);
router.patch("/updatePost/:id/likePost", auth, likePost);
router.get("/search" , getPostsBySearch)

export default router;
