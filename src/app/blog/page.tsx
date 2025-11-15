import { Suspense } from "react";
import { getAllPosts } from "@/lib/blog";
import { BlogList } from "@/components/blog/blog-list";
import { BlogHeader } from "@/components/blog/blog-header";
import { BlogFooter } from "@/components/blog/blog-footer";
import AnimatedLoadingSkeleton from "@/components/blog/animated-loading-skeleton";

async function BlogContent() {
  // Simulate loading delay to show skeleton
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const posts = getAllPosts();
  return <BlogList posts={posts} />;
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <Suspense fallback={<AnimatedLoadingSkeleton />}>
        <BlogContent />
      </Suspense>
      <BlogFooter />
    </div>
  );
}
