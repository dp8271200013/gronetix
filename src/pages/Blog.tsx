import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "5 Ways AI Automation Can Transform Your Small Business",
      excerpt: "Discover how artificial intelligence and automation can help you save time, reduce costs, and scale your operations efficiently.",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      category: "AI & Automation",
    },
    {
      title: "The Complete Guide to Business Digitalization in 2025",
      excerpt: "Everything you need to know about transitioning your business into the digital age, from tools to strategies.",
      date: "Jan 10, 2025",
      readTime: "8 min read",
      category: "Digital Transformation",
    },
    {
      title: "Why Your Business Needs a Modern Website (And How to Get One)",
      excerpt: "Learn why a professional website is crucial for business growth and what features make a website truly effective.",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      category: "Web Development",
    },
    {
      title: "Social Media Automation: Work Smarter, Not Harder",
      excerpt: "Master the art of social media management with automation tools that keep your content flowing 24/7.",
      date: "Dec 28, 2024",
      readTime: "7 min read",
      category: "Social Media",
    },
    {
      title: "From Startup to Scale-Up: Digital Tools That Matter",
      excerpt: "The essential digital tools and technologies that can help your startup grow into a thriving business.",
      date: "Dec 20, 2024",
      readTime: "10 min read",
      category: "Business Growth",
    },
    {
      title: "Understanding AI Chatbots: Your 24/7 Customer Service Solution",
      excerpt: "How AI-powered chatbots can revolutionize your customer service and boost customer satisfaction.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "AI & Automation",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-surface-darker to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Insights & <span className="text-gradient">Resources</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest trends, tips, and strategies for digital transformation 
            and business growth.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    className="mt-4 group/btn w-full justify-between"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-surface-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest insights on digital transformation, 
                AI automation, and business growth strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero" size="lg">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
