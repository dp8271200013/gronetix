import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form submission logic would go here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-surface-darker to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Book a free demo or get in touch with our team. 
            We're here to help you scale.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 glow-purple">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email Us</h3>
                      <p className="text-muted-foreground text-sm">info@scalestack.com</p>
                      <p className="text-muted-foreground text-sm">support@scalestack.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 glow-purple">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Call Us</h3>
                      <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground text-sm">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 glow-purple">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Visit Us</h3>
                      <p className="text-muted-foreground text-sm">Digital Hub</p>
                      <p className="text-muted-foreground text-sm">Tech City, Innovation District</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Need immediate assistance? Our support team is available around the clock.
                  </p>
                  <Button variant="hero" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardContent className="p-8 sm:p-12">
                  <h2 className="text-3xl font-bold mb-2">Book Your Free Demo</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="bg-background border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project and how we can help..."
                        rows={6}
                        className="bg-background border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-surface-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Businesses <span className="text-gradient">Choose Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">&lt; 24h</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">5★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
