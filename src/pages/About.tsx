import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower small and medium businesses with enterprise-level digital solutions that are fast, affordable, and effective.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "We put our clients first, delivering personalized solutions that truly understand and meet their unique business needs.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging the latest in AI and automation technology to keep our clients ahead of the competition.",
    },
    {
      icon: Rocket,
      title: "Speed & Quality",
      description: "Lightning-fast delivery without compromising on quality. We build solutions that work and scale.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-surface-darker to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">SCALESTACK</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe every small business deserves access to the same powerful digital tools 
            that large corporations use. That's why we created SCALESTACK.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-8 sm:p-12">
                <h2 className="text-3xl font-bold mb-6 text-gradient">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    SCALESTACK was born from a simple observation: small businesses were being left 
                    behind in the digital revolution. While large corporations invested millions in 
                    automation, AI, and digital infrastructure, small business owners struggled with 
                    outdated systems and limited resources.
                  </p>
                  <p>
                    We knew there had to be a better way. A way to bring enterprise-level digital 
                    solutions to businesses of all sizes — without the enterprise price tag or complexity.
                  </p>
                  <p>
                    Today, SCALESTACK helps businesses transform their operations through sleek web 
                    design, intelligent automation, and strategic digital solutions. We're not just 
                    a service provider; we're your partner in growth.
                  </p>
                  <p className="text-foreground font-semibold pt-4">
                    Our slogan says it all: CREATE. AUTOMATE. SCALE.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-surface-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What We <span className="text-gradient">Stand For</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center glow-purple">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Why Choose <span className="text-gradient">SCALESTACK?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-primary">Affordable Pricing</h3>
                <p className="text-muted-foreground">Enterprise solutions without the enterprise price tag.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-primary">Lightning Fast</h3>
                <p className="text-muted-foreground">Get your solutions delivered in record time without compromising quality.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-primary">AI-Powered</h3>
                <p className="text-muted-foreground">Cutting-edge AI integration tailored to your business needs.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-primary">24/7 Support</h3>
                <p className="text-muted-foreground">Real-time support whenever you need it, wherever you are.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
