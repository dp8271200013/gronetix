import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Globe, Zap, MessageSquare } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import aiAutomation from "@/assets/ai-automation.jpg";
import webDev from "@/assets/web-dev.jpg";

const Home = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Fast, responsive, and user-friendly websites that convert visitors into customers.",
      image: webDev,
    },
    {
      icon: Sparkles,
      title: "AI Automation",
      description: "Automate social posting, invoices, receipts, chatbots, and more with cutting-edge AI.",
      image: aiAutomation,
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Engage your audience with consistent, AI-powered social media strategies.",
      image: aiAutomation,
    },
    {
      icon: Zap,
      title: "Business Digitalization",
      description: "Transform your operations with complete digital solutions tailored to your needs.",
      image: webDev,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center animate-fade-in">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full glow-purple">
            <span className="text-primary text-sm font-semibold">CREATE. AUTOMATE. SCALE.</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Scale Your Business
            <br />
            <span className="text-gradient">Like a Giant</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We help small businesses compete with large corporations through sleek web design, 
            AI automation, and digital transformation — fast, smart, and affordable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="xl">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to take your business to the next level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
                >
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${service.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors glow-purple">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="premium" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Scale?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the businesses that are already transforming with SCALESTACK. 
            Book a free demo and see how we can help you grow.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl" className="animate-glow">
              Book Your Free Demo Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
