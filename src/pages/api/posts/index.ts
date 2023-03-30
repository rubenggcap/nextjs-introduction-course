// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Post } from "@/interfaces/post.interface";
import type { NextApiRequest, NextApiResponse } from "next";
import { POSTS } from "../../../data/posts";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json(POSTS);
}
