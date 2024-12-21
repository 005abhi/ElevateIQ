"use client";

import { Conversation } from "../InterviewPrep/components/conversation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Bot,
  Mic,
  Speaker,
  BrainCircuit,
  Target,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-16 overflow-y-auto">
      <div className="w-full max-w-5xl">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          OpusConnect InterBIT
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Experience natural Job Interviews powered by advanced AI technology
        </p>

        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Start Your AI Interview</CardTitle>
            <CardDescription>
              Interact with our AI interviewer below
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Conversation />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-white/90">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
