import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Sparkles, 
  MessageSquare, 
  Zap, 
  Code, 
  Bot, 
  Share2, 
  Database,
  ArrowRight 
} from "lucide-react";
import webDev from "@/assets/web-dev.jpg";
import aiAutomation from "@/assets/ai-automation.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites built with the latest technologies. Fast loading, SEO-optimized, and designed to convert.",
      features: [
        "Custom web design",
        "Responsive layouts",
        "E-commerce integration",
        "SEO optimization",
        "Content management systems",
      ],
      image: webDev,
    },
    {
      icon: Sparkles,
      title: "AI Automation",
      description: "Harness the power of AI to automate repetitive tasks and streamline your operations. Save time and reduce costs.",
      features: [
        "AI chatbots & assistants",
        "Automated social posting",
        "Invoice & receipt automation",
        "Email follow-up sequences",
        "Custom AI workflows",
      ],
      image: aiAutomation,
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Consistent, engaging social media presence powered by AI. Grow your audience and boost engagement effortlessly.",
      features: [
        "Content scheduling",
        "AI-powered content creation",
        "Analytics & insights",
        "Multi-platform management",
        "Engagement monitoring",
      ],
      image: aiAutomation,
    },
    {
      icon: Zap,
      title: "Business Digitalization",
      description: "Complete digital transformation solutions tailored to your business. Modernize your operations from end to end.",
      features: [
        "Process automation",
        "Digital workflow design",
        "Cloud migration",
        "Data management",
        "System integration",
      ],
      image: webDev,
    },
  ];

  const additionalServices = [
    { icon: Code, title: "Custom Software", description: "Bespoke applications built for your unique needs" },
    { icon: Bot, title: "AI Integration", description: "Integrate AI into your existing systems" },
    { icon: Share2, title: "API Development", description: "Connect your tools and automate workflows" },
    { icon: Database, title: "Data Solutions", description: "Organize and leverage your business data" },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-surface-darker to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to help your business compete and thrive 
            in the modern marketplace.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center glow-purple">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button variant="hero" size="lg">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>

                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <Card className="overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                      <div
                        className="h-80 bg-cover bg-center"
                        style={{ backgroundImage: `url(${service.image})` }}
                      >
                        <div className="h-full w-full bg-gradient-to-t from-card/80 to-transparent" />
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-surface-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Additional <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized services to meet your unique business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 glow-purple">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Book a free consultation and discover how SCALESTACK can transform your business.
              </p>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Book Your Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
