import { getPostsByTag } from "@/lib/blog";
import { BlogHeader } from "@/components/blog/blog-header";
import { BlogFooter } from "@/components/blog/blog-footer";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Tag as TagIcon } from "lucide-react";

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getPostsByTag(params.tag);
  const currentTag = decodeURIComponent(params.tag);

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Button & Header */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <TagIcon className="w-8 h-8 text-primary" />
            <h1 className="text-5xl font-bold">#{currentTag}</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            {posts.length} {posts.length === 1 ? "post" : "posts"} with this tag
          </p>
        </div>

        {/* Blog Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No posts found with this tag</p>
            <Link href="/blog" className="text-primary hover:underline mt-4 inline-block">
              View all posts
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {posts.map((post) => (
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
                        <Badge
                          variant={
                            post.tags[0].toLowerCase() === currentTag.toLowerCase()
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs font-medium"
                        >
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

      {/* Footer */}
      <BlogFooter />
    </div>
  );
}
