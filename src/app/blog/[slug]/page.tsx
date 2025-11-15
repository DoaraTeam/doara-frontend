"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { Badge } from "@/components/ui/badge";
import { SocialShare } from "@/components/blog/social-share";
import { BlogHeader } from "@/components/blog/blog-header";
import { BlogFooter } from "@/components/blog/blog-footer";
import { CodeBlock } from "@/components/blog/code-block";
import { CalendarDays, User, Clock, ArrowUp, ArrowDown, Home, ChevronRight } from "lucide-react";
import "highlight.js/styles/github-dark.css";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tags: string[];
  image: string;
  content: string;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [readingProgress, setReadingProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    // Fetch post data
    fetch(`/api/blog/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        // Add a minimum loading time for better UX
        return new Promise<BlogPost>((resolve) => {
          setTimeout(() => resolve(data), 1000);
        });
      })
      .then((data) => {
        setPost(data);

        // Calculate reading time (average 200 words per minute)
        const words = data.content.split(/\s+/).length;
        setReadingTime(Math.ceil(words / 200));
      })
      .catch(() => setPost(null))
      .finally(() => setIsLoading(false));
  }, [params.slug]);

  useEffect(() => {
    if (!post) return;

    // Extract headings from markdown
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const matches: RegExpExecArray[] = [];
    let match;
    while ((match = headingRegex.exec(post.content)) !== null) {
      matches.push(match);
    }

    const extractedHeadings = matches.map((match) => {
      const level = match[1].length;
      const text = match[2];
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      return { id, text, level };
    });
    setHeadings(extractedHeadings);

    // Setup scroll tracking
    const handleScroll = () => {
      // Reading progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(progress, 100));

      // Active heading
      const headingElements = extractedHeadings
        .map((h) => document.getElementById(h.id))
        .filter(Boolean);

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element && element.getBoundingClientRect().top < 100) {
          setActiveId(extractedHeadings[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  // Loading skeleton
  if (isLoading) {
    return (
      <>
        <div className="fixed top-0 left-0 h-1 bg-primary/20 z-50 w-full animate-pulse" />

        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
          {/* Hero Skeleton with Breadcrumb */}
          <div className="border-b bg-background">
            <div className="container mx-auto px-2 md:px-4 py-12">
              <div className="max-w-6xl mx-auto">
                {/* Breadcrumb Skeleton */}
                <nav className="flex items-center gap-2 text-sm mb-6">
                  <div className="h-4 w-4 bg-muted rounded animate-pulse" />
                  <div className="h-4 w-4 bg-muted rounded animate-pulse" />
                  <div className="h-4 w-12 bg-muted rounded animate-pulse" />
                  <div className="h-4 w-4 bg-muted rounded animate-pulse" />
                  <div className="h-4 w-48 bg-muted rounded animate-pulse" />
                </nav>

                <div className="h-12 bg-muted rounded w-3/4 mb-4 animate-pulse" />
                <div className="h-6 bg-muted rounded w-full mb-2 animate-pulse" />
                <div className="h-6 bg-muted rounded w-2/3 mb-6 animate-pulse" />
                <div className="flex gap-4 mb-6">
                  <div className="h-5 w-24 bg-muted rounded animate-pulse" />
                  <div className="h-5 w-24 bg-muted rounded animate-pulse" />
                  <div className="h-5 w-24 bg-muted rounded animate-pulse" />
                </div>
                <div className="flex gap-2">
                  <div className="h-6 w-20 bg-muted rounded-full animate-pulse" />
                  <div className="h-6 w-20 bg-muted rounded-full animate-pulse" />
                  <div className="h-6 w-20 bg-muted rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="container mx-auto px-2 md:px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 max-w-7xl mx-auto">
              {/* Article Skeleton */}
              <div className="lg:col-span-9">
                <div className="bg-card rounded-lg border-none p-4 md:p-8 lg:p-10 space-y-4">
                  <div className="h-64 bg-muted rounded-lg animate-pulse mb-8" />
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded w-full animate-pulse" />
                    <div className="h-4 bg-muted rounded w-full animate-pulse" />
                    <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                  </div>
                  <div className="h-8 bg-muted rounded w-1/2 animate-pulse mt-6" />
                  <div className="space-y-3 mt-4">
                    <div className="h-4 bg-muted rounded w-full animate-pulse" />
                    <div className="h-4 bg-muted rounded w-full animate-pulse" />
                    <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Sidebar Skeleton */}
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24">
                  <div className="bg-card rounded-lg border p-4 space-y-4">
                    <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
                    <div className="space-y-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-3 bg-muted rounded animate-pulse" />
                      ))}
                    </div>
                    <div className="pt-4 border-t space-y-3">
                      <div className="h-2 bg-muted rounded-full animate-pulse" />
                      <div className="h-8 bg-muted rounded-lg animate-pulse" />
                      <div className="h-8 bg-muted rounded-lg animate-pulse" />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Không tìm thấy bài viết</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Quay lại danh sách blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Blog Header */}
      <BlogHeader />

      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-150"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Social Share Sidebar */}
      <SocialShare title={post.title} url={`/blog/${post.slug}`} />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section with Breadcrumb */}
        <div className="border-b bg-background">
          <div className="container mx-auto px-2 md:px-4 py-12">
            <div className="max-w-6xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link
                  href="/"
                  className="hover:text-foreground transition-colors flex items-center"
                >
                  <Home className="w-4 h-4" />
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Post
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground truncate max-w-[200px] sm:max-w-[300px] md:max-w-[500px]">
                  {post.title}
                </span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{post.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("vi-VN")}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {readingTime} phút đọc
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/blog/tag/${tag}`}>
                    <Badge
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-2 md:px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 max-w-7xl mx-auto">
            {/* Article Content */}
            <article className="lg:col-span-9">
              <div className="bg-card rounded-lg border-none p-4 md:p-8 lg:p-[3.75rem]">
                {post.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
                  />
                )}

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight, rehypeRaw]}
                    components={{
                      h1: ({ children }) => {
                        const text = children?.toString() || "";
                        const id = text
                          .toLowerCase()
                          .replace(/[^\w\s-]/g, "")
                          .replace(/\s+/g, "-");
                        return <h1 id={id}>{children}</h1>;
                      },
                      h2: ({ children }) => {
                        const text = children?.toString() || "";
                        const id = text
                          .toLowerCase()
                          .replace(/[^\w\s-]/g, "")
                          .replace(/\s+/g, "-");
                        return <h2 id={id}>{children}</h2>;
                      },
                      h3: ({ children }) => {
                        const text = children?.toString() || "";
                        const id = text
                          .toLowerCase()
                          .replace(/[^\w\s-]/g, "")
                          .replace(/\s+/g, "-");
                        return <h3 id={id}>{children}</h3>;
                      },
                      code: ({ className, children, ...props }) => {
                        const isInline = !className;
                        if (isInline) {
                          return (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        }
                        return <CodeBlock className={className}>{children}</CodeBlock>;
                      },
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">Tags:</span>
                {post.tags.map((tag) => (
                  <Link key={tag} href={`/blog/tag/${tag}`}>
                    <Badge
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </article>

            {/* Sidebar - Desktop */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-16 space-y-4">
                {/* Table of Contents */}
                <div className="bg-card rounded-lg border-none p-4">
                  <h3 className="font-semibold text-sm mb-3 line-clamp-2">{post.title}</h3>

                  {/* TOC Links */}
                  <nav className="space-y-0.5 mb-4 max-h-[400px] overflow-y-auto">
                    {headings.map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className={`block text-xs py-1.5 px-2 rounded transition-colors line-clamp-2 ${
                          activeId === heading.id
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                        style={{ paddingLeft: `${heading.level * 8}px` }}
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>

                  {/* Progress Bar */}
                  <div className="mb-4 pt-4 border-t">
                    <div className="flex justify-between text-xs text-muted-foreground mb-2">
                      <span>Start</span>
                      <span>End</span>
                    </div>
                    <div className="relative h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-primary transition-all duration-150"
                        style={{ width: `${readingProgress}%` }}
                      />
                    </div>
                    <div className="text-center mt-1.5 text-xs font-medium text-primary">
                      {Math.round(readingProgress)}%
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={scrollToTop}
                      className="w-full flex items-center justify-between px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-xs"
                    >
                      <span>Back to top</span>
                      <ArrowUp className="w-3 h-3" />
                    </button>
                    <button
                      onClick={scrollToBottom}
                      className="w-full flex items-center justify-between px-3 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-xs"
                    >
                      <span>Go to bottom</span>
                      <ArrowDown className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Footer */}
      <BlogFooter />
    </>
  );
}
