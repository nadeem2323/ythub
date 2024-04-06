"use client"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function VideoUploadForm() {
  const [videoUrl, setVideoUrl] = useState("");

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   console.log("Submitted video URL:", videoUrl);
  };

  return (
    <div className="flex items-center min-h-screen px-4">
      <div className="mx-auto max-w-[400px] space-y-4">
        <div className="text-center">
          <h1 className="text-5xl py-4 font-bold">Upload Video</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter the YouTube video URL below to upload your video
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="videoUrl">YouTube Video URL:</Label>
            <Input
              id="videoUrl"
              placeholder="https://www.youtube.com/watch?v=your-video-id"
              required
              type="text"
              value={videoUrl}
              onChange={handleInputChange}
            />
          </div>
          <Button className="w-full" type="submit">
            Upload
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Want to watch more videos?&nbsp;
          <Link className="underline" href="/videos">
            Browse Videos
          </Link>
        </div>
      </div>
    </div>
  );
}
