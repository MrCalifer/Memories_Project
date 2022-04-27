import express from "express";
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likePost,
  getPostsBySearch,
  getPostByID,
  commentPost
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/getPosts", getPosts);
router.post("/createPost", auth, createPosts);
router.patch("/updatePost/:id", auth, updatePost);
router.delete("/deletePost/:id", auth, deletePost);
router.patch("/updatePost/:id/likePost", auth, likePost);
router.get("/search", getPostsBySearch);
router.get("/:id", getPostByID);
router.post("/:id/commentPost", auth, commentPost);


export default router;
