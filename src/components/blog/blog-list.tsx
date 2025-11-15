"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { BlogPostMetadata } from "@/lib/blog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Blockchain",
  "Flutter",
  "AI",
  "Data",
  "DevOps",
  "Showcase",
  "Cheatsheet",
];

interface BlogListProps {
  posts: BlogPostMetadata[];
}

export function BlogList({ posts }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPosts = posts.slice(0, 3); // 3 bài viết nổi bật

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) =>
          post.tags.some((tag) => tag.toLowerCase() === activeCategory.toLowerCase())
        );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-12">Blog</h1>

      {/* Featured Posts Carousel */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {featuredPosts.map((post) => (
                <CarouselItem key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <article className="bg-card rounded-2xl overflow-hidden border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
                      <div className="grid md:grid-cols-2 gap-0">
                        {/* Featured Image */}
                        <div className="relative h-64 md:h-[400px] bg-muted overflow-hidden">
                          {post.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                              <span className="text-6xl">📝</span>
                            </div>
                          )}
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1">
                              Nổi bật
                            </Badge>
                          </div>
                        </div>

                        {/* Featured Content */}
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-sm">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-muted-foreground text-lg mb-6 line-clamp-3">
                            {post.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{new Date(post.date).toLocaleDateString("vi-VN")}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      )}

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-12 border-b pb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg font-medium pb-2 transition-colors relative ${
              activeCategory === category
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {category}
            {activeCategory === category && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Chưa có bài viết nào trong danh mục này</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-card rounded-xl overflow-hidden border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  {post.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                      <span className="text-4xl">📝</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <h2 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <div className="mt-auto">
                    {post.tags.length > 0 && (
                      <Badge variant="secondary" className="text-xs font-medium">
                        {post.tags[0]}
                      </Badge>
                    )}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
