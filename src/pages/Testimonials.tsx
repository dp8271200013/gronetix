import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      company: "Kumar Trading Co.",
      content: "SCALESTACK transformed our business completely. The website they built is beautiful and fast, and their AI automation has saved us countless hours every week. We can finally compete with the big players in our industry!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "GreenLeaf Organics",
      content: "The team at SCALESTACK understood our vision perfectly. Their social media automation has tripled our engagement, and the custom chatbot handles customer queries 24/7. Best investment we've made this year.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "TechStart Solutions",
      content: "I was skeptical about AI automation at first, but SCALESTACK proved me wrong. The invoice automation alone has cut our admin time by 80%. Their support is outstanding too - always there when we need them.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Director",
      company: "Sharma Retail Group",
      content: "Working with SCALESTACK has been a game-changer. They delivered our e-commerce website in record time, and it's been converting like crazy. The digital transformation they guided us through was seamless.",
      rating: 5,
    },
    {
      name: "David Martinez",
      role: "Managing Partner",
      company: "Martinez & Associates",
      content: "Professional, efficient, and innovative. SCALESTACK built us a stunning website and integrated AI tools that have modernized our entire operation. Our clients are impressed, and so are we.",
      rating: 5,
    },
    {
      name: "Amanda Foster",
      role: "Owner",
      company: "Foster's Boutique",
      content: "As a small business owner, I needed affordable but high-quality digital solutions. SCALESTACK delivered exactly that. The automated social posting keeps my brand active while I focus on serving customers.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-surface-darker to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Client <span className="text-gradient">Success Stories</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients have to say about 
            working with SCALESTACK.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-primary opacity-50" />
                  </div>

                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Results That <span className="text-gradient">Speak</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Join Our Success Stories
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to transform your business like these companies did? 
                Book a free demo and let's get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 glow-purple hover:glow-purple-strong transition-all duration-300">
                    Book Your Free Demo
                  </button>
                </a>
                <a href="/services">
                  <button className="px-8 py-4 border border-primary/20 rounded-lg font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300">
                    View Our Services
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
