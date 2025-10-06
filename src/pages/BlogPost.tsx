import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const blogPosts = [
  {
    id: "ai-automation-transform",
    title: "5 Ways AI Automation Can Transform Your Small Business",
    excerpt: "Discover how artificial intelligence and automation can help you save time, reduce costs, and scale your operations efficiently.",
    date: "Jan 15, 2025",
    readTime: "2 min read",
    category: "AI & Automation",
    content: `
      <h2>The AI Revolution for Small Business</h2>
      <p>Artificial Intelligence isn't just for tech giants anymore. Today's small businesses can harness the same powerful AI tools that Fortune 500 companies use, but without the enterprise price tag. Here are five game-changing ways AI automation can transform your business operations.</p>

      <h3>1. Automate Customer Service with AI Chatbots</h3>
      <p>AI chatbots can handle 80% of routine customer inquiries instantly, 24/7. This means your customers get immediate answers while you focus on complex issues that truly need human attention. Modern chatbots understand context, learn from interactions, and can seamlessly hand off to human agents when needed.</p>

      <h3>2. Streamline Social Media Management</h3>
      <p>AI-powered social media tools can analyze your audience, suggest optimal posting times, generate content ideas, and even create engaging captions. Schedule weeks of content in hours, not days. The AI learns your brand voice and maintains consistency across all platforms.</p>

      <h3>3. Intelligent Invoicing and Billing</h3>
      <p>Stop chasing payments manually. AI automation can generate invoices, send payment reminders, process recurring billing, and even predict which customers might pay late. It integrates with your accounting software, ensuring every transaction is recorded accurately.</p>

      <h3>4. Smart Email Marketing</h3>
      <p>AI analyzes customer behavior to send perfectly timed, personalized emails. It determines the best subject lines, optimal send times, and which content resonates with each segment of your audience. Watch your open rates and conversions soar.</p>

      <h3>5. Data-Driven Business Insights</h3>
      <p>AI can analyze sales patterns, predict inventory needs, identify growth opportunities, and spot potential problems before they become critical. Get actionable insights without hiring a data analyst.</p>

      <h3>Getting Started</h3>
      <p>The key is to start small. Pick one repetitive task that consumes your time and automate it. Once you see the benefits, expand to other areas. At GRONETIX, we help businesses identify the best automation opportunities and implement solutions that deliver results in hours, not days or weeks.</p>
    `
  },
  {
    id: "business-digitalization-2025",
    title: "The Complete Guide to Business Digitalization in 2025",
    excerpt: "Everything you need to know about transitioning your business into the digital age, from tools to strategies.",
    date: "Jan 10, 2025",
    readTime: "2 min read",
    category: "Digital Transformation",
    content: `
      <h2>Why Digitalization Matters Now More Than Ever</h2>
      <p>Business digitalization isn't optional anymore—it's essential for survival. Companies that embrace digital transformation see an average of 20% higher profit margins than those that don't. Here's your complete roadmap.</p>

      <h3>Step 1: Assess Your Current State</h3>
      <p>Before diving into new tools, understand where you are. Are you still using pen and paper for inventory? Spreadsheets for customer management? Identify your biggest pain points and opportunities.</p>

      <h3>Step 2: Start With Customer-Facing Systems</h3>
      <p>Your website is your digital storefront. Make it professional, fast, and mobile-friendly. Add online booking, e-commerce capabilities, or a customer portal. These changes directly impact revenue and are easier to measure.</p>

      <h3>Step 3: Digitalize Internal Operations</h3>
      <p>Move from paper to cloud-based systems. Use project management tools for team collaboration, accounting software for finances, and CRM systems for customer relationships. Cloud solutions mean you can access your business from anywhere.</p>

      <h3>Step 4: Implement Automation</h3>
      <p>Once your data is digital, automate repetitive tasks. Automatic appointment reminders, inventory alerts, invoice generation, and social media posting free up hours each week.</p>

      <h3>Step 5: Train Your Team</h3>
      <p>The best digital tools fail without proper adoption. Invest time in training your team. Start with the basics and build up gradually. Make champions of early adopters who can help others.</p>

      <h3>Common Pitfalls to Avoid</h3>
      <p>Don't try to digitalize everything at once. Don't choose tools just because they're popular—pick what solves your specific problems. And don't skip data security—protect customer information from day one.</p>

      <h3>The GRONETIX Approach</h3>
      <p>We believe digitalization should be simple, not overwhelming. We help you identify quick wins, implement proven solutions, and see results fast—usually in hours, not days or weeks. Your business deserves enterprise-level digital tools without the complexity or cost.</p>
    `
  },
  {
    id: "modern-website-necessity",
    title: "Why Your Business Needs a Modern Website (And How to Get One)",
    excerpt: "Learn why a professional website is crucial for business growth and what features make a website truly effective.",
    date: "Jan 5, 2025",
    readTime: "2 min read",
    category: "Web Development",
    content: `
      <h2>Your Website: The Most Important Employee You'll Ever Hire</h2>
      <p>Think of your website as an employee that works 24/7, never calls in sick, and can serve thousands of customers simultaneously. Yet many small businesses treat it as an afterthought. Here's why that's a costly mistake.</p>

      <h3>First Impressions Matter</h3>
      <p>75% of consumers judge a business's credibility based on its website. An outdated or unprofessional site tells potential customers you don't care about quality. A modern, sleek website signals professionalism and trustworthiness.</p>

      <h3>Mobile-First Is Non-Negotiable</h3>
      <p>Over 60% of web traffic comes from mobile devices. If your site doesn't work perfectly on phones, you're losing customers. Modern websites automatically adapt to any screen size, providing seamless experiences everywhere.</p>

      <h3>Speed Equals Revenue</h3>
      <p>A 1-second delay in page load time can reduce conversions by 7%. Users expect pages to load in under 2 seconds. Slow websites kill sales before customers even see your offerings. Modern development frameworks ensure blazing-fast performance.</p>

      <h3>SEO: Your 24/7 Marketing Machine</h3>
      <p>A properly optimized website ranks higher in Google searches, bringing in organic traffic without paid ads. Modern SEO includes fast loading, mobile optimization, quality content, and proper technical structure. It's not optional—it's essential.</p>

      <h3>Essential Features for 2025</h3>
      <p>Every modern business website needs: crystal-clear value proposition above the fold, prominent calls-to-action, social proof (testimonials, reviews), easy contact options, and fast, secure hosting. E-commerce businesses need seamless checkout, product search, and customer accounts.</p>

      <h3>How to Get Started Without Breaking the Bank</h3>
      <p>Building a modern website doesn't require a six-month timeline or enterprise budget. With the right approach, you can have a professional, high-performing site up and running quickly. Focus on clarity, speed, and user experience over flashy features.</p>

      <h3>The GRONETIX Promise</h3>
      <p>We build mobile-first websites that are SEO-ready, blazing fast, and designed to convert visitors into customers. Our process delivers professional results in hours, not days or weeks—because your business can't afford to wait.</p>
    `
  },
  {
    id: "social-media-automation",
    title: "Social Media Automation: Work Smarter, Not Harder",
    excerpt: "Master the art of social media management with automation tools that keep your content flowing 24/7.",
    date: "Dec 28, 2024",
    readTime: "2 min read",
    category: "Social Media",
    content: `
      <h2>The Social Media Struggle is Real</h2>
      <p>Posting consistently on social media feels like a full-time job. Between creating content, responding to comments, and analyzing results, it's easy to get overwhelmed. But what if you could maintain an active presence without spending hours daily? Enter social media automation.</p>

      <h3>What Can Be Automated?</h3>
      <p>Content scheduling across multiple platforms, posting at optimal times for maximum engagement, basic customer service responses, performance tracking and reporting, and hashtag research and optimization. The goal isn't to replace human interaction—it's to eliminate repetitive tasks.</p>

      <h3>The Power of Batching Content</h3>
      <p>Spend one focused session creating a week or month of content, then schedule it all. This batch-and-schedule approach is far more efficient than creating content daily. You'll be more creative, maintain consistent quality, and free up daily time for real customer interactions.</p>

      <h3>AI-Generated Content That Actually Works</h3>
      <p>Modern AI tools can draft engaging captions, suggest relevant hashtags, and even generate image ideas. You provide the brand voice and final approval—AI handles the heavy lifting. The result? Professional content without the time investment.</p>

      <h3>Smart Response Management</h3>
      <p>Automation can handle common questions instantly: business hours, location, pricing basics, booking links. When a complex question comes in, you're notified immediately. Your customers get quick answers, and you focus on conversations that matter.</p>

      <h3>Analytics Without the Headache</h3>
      <p>Automated reports show what's working and what's not. Track engagement rates, follower growth, best-performing content, and optimal posting times. Use these insights to continuously improve your strategy without manually compiling data.</p>

      <h3>The Human Touch Still Matters</h3>
      <p>Automation handles the mechanics, but your personality drives engagement. Respond personally to comments, share behind-the-scenes content, and engage authentically with your community. Automation gives you time for these meaningful interactions.</p>

      <h3>Getting Started Today</h3>
      <p>At GRONETIX, we set up complete social media automation systems that maintain your presence while giving you back hours every week. Our solutions deliver results in hours, not days or weeks—because consistent social media presence shouldn't consume your life.</p>
    `
  },
  {
    id: "startup-to-scale-up",
    title: "From Startup to Scale-Up: Digital Tools That Matter",
    excerpt: "The essential digital tools and technologies that can help your startup grow into a thriving business.",
    date: "Dec 20, 2024",
    readTime: "2 min read",
    category: "Business Growth",
    content: `
      <h2>The Right Tools at the Right Time</h2>
      <p>Startups that scale successfully have one thing in common: they invest in the right digital infrastructure early. Here are the essential tools that separate growing businesses from stagnant ones.</p>

      <h3>Foundation: Website and Hosting</h3>
      <p>Your website is your business card, storefront, and sales team rolled into one. Invest in proper hosting that won't crash when you go viral. Choose platforms that scale with you—what works for 100 visitors might break at 10,000.</p>

      <h3>CRM: Your Customer Memory</h3>
      <p>Customer Relationship Management systems remember everything about every customer. Who they are, what they bought, when they last contacted you, and what they need next. This isn't luxury—it's essential for scaling without losing the personal touch.</p>

      <h3>Automation: Your Force Multiplier</h3>
      <p>Every hour spent on repetitive tasks is an hour not spent on growth. Automate invoicing, appointment reminders, email follow-ups, social media posting, and data entry. One person with good automation can do the work of five without it.</p>

      <h3>Analytics: Your Growth Compass</h3>
      <p>You can't improve what you don't measure. Track website traffic, conversion rates, customer acquisition costs, and lifetime value. Modern analytics tools make this easy, turning raw data into actionable insights.</p>

      <h3>Communication: Internal and External</h3>
      <p>Use Slack or Teams for internal communication—email is too slow for growing teams. For customers, implement live chat, chatbots, and multichannel support. Fast, accessible communication builds loyalty and drives sales.</p>

      <h3>Financial Management: Beyond Spreadsheets</h3>
      <p>Proper accounting software pays for itself instantly. Track expenses, generate invoices, manage payroll, and prepare for taxes—all in one place. Real-time financial visibility is crucial for making smart growth decisions.</p>

      <h3>Common Mistakes to Avoid</h3>
      <p>Don't pick tools because they're cheap—calculate the cost of lost time and missed opportunities. Don't wait until you "need" something—by then, you're already behind. And don't choose tools that don't integrate—disconnected systems create more work, not less.</p>

      <h3>Your Growth Partner</h3>
      <p>At GRONETIX, we help startups implement the right digital infrastructure from day one. We focus on tools that scale with you, integrate seamlessly, and deliver results in hours, not days or weeks. Your growth shouldn't be limited by outdated systems.</p>
    `
  },
  {
    id: "ai-chatbots-customer-service",
    title: "Understanding AI Chatbots: Your 24/7 Customer Service Solution",
    excerpt: "How AI-powered chatbots can revolutionize your customer service and boost customer satisfaction.",
    date: "Dec 15, 2024",
    readTime: "2 min read",
    category: "AI & Automation",
    content: `
      <h2>The Always-On Customer Service Revolution</h2>
      <p>Imagine never missing a customer inquiry, even at 3 AM. That's the power of AI chatbots—tireless, instant, and surprisingly human customer service that works around the clock.</p>

      <h3>What Modern Chatbots Can Do</h3>
      <p>Today's AI chatbots are far beyond simple "if-this-then-that" scripts. They understand natural language, remember context, learn from interactions, handle multiple conversations simultaneously, and escalate to humans when needed. They're not replacing human service—they're enhancing it.</p>

      <h3>The 80/20 Rule of Customer Inquiries</h3>
      <p>Studies show 80% of customer questions are routine: business hours, location, pricing, appointment booking, order status, and return policies. AI handles these instantly, freeing your team for the 20% that requires human expertise, empathy, and creativity.</p>

      <h3>Response Time Drives Satisfaction</h3>
      <p>Customers who get instant responses are 3x more likely to convert. They don't care if a bot or human answers—they care about getting help quickly. Chatbots provide that instant gratification while collecting information for better human follow-up.</p>

      <h3>Lead Generation While You Sleep</h3>
      <p>Chatbots capture leads 24/7, qualifying prospects, booking appointments, and sending relevant information—all while you're closed. They never forget to collect contact details or miss a follow-up opportunity.</p>

      <h3>The Handoff to Human Support</h3>
      <p>Great chatbots know their limits. When conversations get complex or emotional, they seamlessly transfer to human agents—along with the full conversation history. Your team picks up exactly where the bot left off.</p>

      <h3>Continuous Improvement Through Learning</h3>
      <p>AI chatbots learn from every interaction. They identify common questions, discover new ways customers phrase inquiries, and refine responses for clarity. The system gets smarter every day without manual programming.</p>

      <h3>Implementation Best Practices</h3>
      <p>Start with clearly defined use cases. Train the chatbot with your actual customer FAQs. Set proper expectations—users should know they're talking to a bot. Monitor conversations regularly and refine responses. Always provide an easy path to human support.</p>

      <h3>GRONETIX Chatbot Solutions</h3>
      <p>We implement AI chatbots that feel natural, solve problems instantly, and integrate with your existing systems. Our approach delivers working solutions in hours, not days or weeks—because every minute without support is a potential lost customer.</p>
    `
  }
];

const BlogPost = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Button
            variant="ghost"
            onClick={() => setSelectedPost(null)}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>

          <article className="max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                {selectedPost.category}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">{selectedPost.title}</h1>
              <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>

            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-surface-dark to-background">
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
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col cursor-pointer"
                onClick={() => setSelectedPost(post)}
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

export default BlogPost;
