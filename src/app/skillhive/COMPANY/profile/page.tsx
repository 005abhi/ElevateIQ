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
import { Sidebar } from "../../../components/Sidebar";

import { Button } from "../../components/ui/button";
import { ThumbsUp, MessageSquare } from "lucide-react";
import "./globals.css";
import Image from "next/image";

const page = async () => {
  await connectMongoDB();
  const posts = await Post.find({})
    .populate("createdBy", "username fullname") // Populate creator details
    .select("_id title content createdAt createdBy imagePath"); // Select required fields

  console.log(posts);

  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <div className="max-w-2xl mx-auto space-y-4">
          {posts.map((post) => (
            <div
              key={String(post._id)}
              className="post-card max-w-lg mx-auto bg-gray-900 rounded-lg shadow-md mb-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center">
                  {/* Avatar */}
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>
                      {post.createdBy.fullname[0]}
                    </AvatarFallback>
                  </Avatar>
                  {/* Full Name */}
                  <p className="text-sm font-semibold">
                    {post.createdBy.fullname}
                  </p>
                </div>
                {/* Created At */}
                <p className="text-xs text-gray-400">
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* Photo */}
              {post.imagePath && (
                <div className="w-full">
                  <Image
                    src={post.imagePath}
                    alt="Uploaded photo"
                    width={500}
                    height={500}
                    className="object-cover w-full"
                  />
                </div>
              )}

              {/* Footer */}
              <div className="p-4">
                {/* Title */}
                <p className="text-base font-semibold mb-2">{post.title}</p>
                {/* Content */}
                <p className="text-sm text-gray-300">{post.content}</p>
              </div>

              {/* Interactions */}
              <div className="flex justify-between items-center p-4 border-t border-gray-700">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <ThumbsUp className="w-5 h-5" />
                  <span className="text-sm">Like</span>
                </Button>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-sm">Comment</span>
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
