import React from "react";
import {
  Bell,
  Home,
  MessageCircle,
  User,
  Users,
  Video,
  X,
  ThumbsUp,
  MessageSquare,
  Share2,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import SignOut from "../../components/ui/signout";
import CreatePost from "../_components/CreatePost";
import MobileMenu from "../_components/MobileMenu";

import Post from "@/models/post";
import dbConnect from "@/libs/mongodb";
import { getServerSession } from "next-auth";
import { options } from "../../../api/auth/[...nextauth]/options";

const ProfilePage = async () => {
  await dbConnect();
  const session = await getServerSession(options);
  const userId = session.user.id;
  //const posts = await Post.find({ createdBy: userId }).lean();
  const posts = await Post.find({})
    .populate("createdBy", "username fullname role") // Populate creator details
    .select("_id title content createdAt createdBy"); // Select required field
  console.log(posts);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 bg-gray-700 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="hidden md:block flex-shrink-0"></div>{" "}
            {/* Placeholder for alignment */}
            <div className="flex-grow text-center">
              <div
                style={{
                  fontFamily: "'Lobster', cursive",
                }}
                className="text-white font-bold text-4xl" // Adjust the text size here
              >
                SKILLHIVE
              </div>
            </div>
            <div>
              <SignOut />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="hidden md:flex w-64 bg-gray-800 p-4 flex-col">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-2 h-4 w-4" />
              Friends
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Groups
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2 h-4 w-4" />
              Pages
            </Button>
            {/* Add more navigation items here */}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-gray-800 rounded-lg shadow-md p-4">
              <CreatePost userId={userId} authorRole="student" />
            </div>
            {posts.map((post) => (
              <div
                key={String(post._id)}
                className="bg-gray-800 rounded-lg shadow-md p-4"
              >
                <div className="flex items-center mb-4">
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
                <div className="flex items-center mb-4">
                  <Avatar className="w-14 h-10 mr-3">
                    <AvatarFallback>{post.createdBy.role}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{post.content}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 border-t border-gray-700 pt-3">
                  <div className="flex items-center">
                    <span className="bg-blue-500 text-white rounded-full p-1 mr-1">
                      <ThumbsUp className="h-3 w-3" />
                    </span>
                    <span>{post?.likes?.length} likes</span>
                  </div>
                  <span>{post?.comments?.length} comments</span>
                </div>
                <div className="flex justify-between mt-4">
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
    </div>
  );
};

export default ProfilePage;
