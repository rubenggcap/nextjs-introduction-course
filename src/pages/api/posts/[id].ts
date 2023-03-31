import { POSTS } from "@/data/posts";
import { Post } from "@/interfaces/post.interface";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | null>
) {
  const post: Post = POSTS.find((post) => post.id === req.query.id)!;
  if (!post) res.status(404).json(null);
  res.status(200).json(post);
}
