"use client";

import { Heart, Bookmark, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";
import { useState } from "react";

interface SocialShareProps {
  title: string;
  url: string;
}

export function SocialShare({ title, url }: SocialShareProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  const shareUrl = typeof window !== "undefined" ? window.location.href : url;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="bg-card/95 backdrop-blur-sm border rounded-full shadow-lg p-3 flex flex-col gap-3">
        {/* Facebook Share */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1877F2] hover:text-white transition-all hover:scale-110 text-muted-foreground"
          aria-label="Share on Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>

        {/* Twitter Share */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all hover:scale-110 text-muted-foreground"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>

        {/* LinkedIn Share */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#0A66C2] hover:text-white transition-all hover:scale-110 text-muted-foreground"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        <div className="h-px bg-border my-1" />

        {/* Copy Link */}
        <div className="relative">
          <button
            onClick={handleCopyLink}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-all hover:scale-110 text-muted-foreground"
            aria-label="Copy link"
          >
            <Link2 className="w-5 h-5" />
          </button>
          {showCopied && (
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-foreground text-background text-xs px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg">
              Đã sao chép!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
