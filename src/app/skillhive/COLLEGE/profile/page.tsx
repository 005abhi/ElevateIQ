import React from "react";
import SignOut from "../../components/ui/signout";
import connectMongoDB from "@/libs/mongodb";
import Post from "@/models/post";
import CreatePost from "../../STUDENT/_components/CreatePost";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { ThumbsUp, MessageSquare } from "lucide-react";
import "./globals.css";

import Image from "next/image";

const page = async () => {
  const session = await getServerSession(options);
  const userId = session.user.id;
  await connectMongoDB();
  const posts = await Post.find({})
    .populate("createdBy", "username fullname") // Populate creator details
    .select("_id title content createdAt createdBy imagePath"); // Select required fields

  console.log(posts);

  return (
    <div className="layout">
      <div className="sidebar"></div>
      <div className="main-content">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="post-card">
            <CreatePost userId={userId} authorRole="college" />
          </div>
          {posts.map((post) => (
            <div key={String(post._id)} className="post-card">
              <div className="header">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>{post.createdBy.fullname}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{post.title}</p>
                  <p className="text-sm text-gray-400">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div>
                <p>{post.content}</p>
              </div>
              {post.imagePath && (
                <Image
                  src={post.imagePath}
                  alt="Post image"
                  width={200}
                  height={200}
                />
              )}
              <div className="footer">
                <div className="flex items-center">
                  <ThumbsUp className="mr-2 h-4 w-4 text-blue-500" />
                  <span>{post?.likes?.length || 0} likes</span>
                </div>
                <span>{post?.comments?.length || 0} comments</span>
              </div>
              <div className="flex mt-4 space-x-2">
                <Button
                  variant="ghost"
                  className="flex-1 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  Like
                </Button>
                <Button
                  variant="ghost"
                  className="flex-1 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Comment
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
