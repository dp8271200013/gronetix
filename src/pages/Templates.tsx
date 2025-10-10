import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Stethoscope, Coffee, Store, Scissors, Dumbbell, Briefcase, ArrowRight } from "lucide-react";
import templateMedical from "@/assets/template-medical-clinic.jpg";
import templateCafe from "@/assets/template-cafe-restaurant.jpg";
import templateShop from "@/assets/template-local-shop.jpg";
import templateSalon from "@/assets/template-salon-spa.jpg";
import templateFitness from "@/assets/template-fitness-studio.jpg";
import templateProfessional from "@/assets/template-professional-services.jpg";

const Templates = () => {
  const templates = [
    {
      icon: Stethoscope,
      title: "Medical Clinic",
      description: "Deliver results in hours, not days or weeks",
      image: templateMedical,
      features: [
        "Online appointment booking system",
        "Patient portal with medical records",
        "Automated appointment reminders",
        "Insurance verification automation",
        "Prescription management system",
      ],
    },
    {
      icon: Coffee,
      title: "Cafe & Restaurant",
      description: "Deliver results in hours, not days or weeks",
      image: templateCafe,
      features: [
        "Online ordering & delivery integration",
        "Menu management system",
        "Table reservation system",
        "Social media auto-posting for daily specials",
        "Customer loyalty program automation",
      ],
    },
    {
      icon: Store,
      title: "Local Shop",
      description: "Deliver results in hours, not days or weeks",
      image: templateShop,
      features: [
        "E-commerce storefront",
        "Inventory management system",
        "Automated invoicing & receipts",
        "Customer database & marketing automation",
        "Multi-channel sales integration",
      ],
    },
    {
      icon: Scissors,
      title: "Salon & Spa",
      description: "Deliver results in hours, not days or weeks",
      image: templateSalon,
      features: [
        "Booking & scheduling system",
        "Client management database",
        "Automated appointment confirmations",
        "Service package promotions",
        "Before/after gallery showcase",
      ],
    },
    {
      icon: Dumbbell,
      title: "Fitness Studio",
      description: "Deliver results in hours, not days or weeks",
      image: templateFitness,
      features: [
        "Class booking & membership management",
        "Workout tracking & progress monitoring",
        "Automated billing & renewals",
        "Virtual training sessions",
        "Member communication automation",
      ],
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Deliver results in hours, not days or weeks",
      image: templateProfessional,
      features: [
        "Client portal & project tracking",
        "Automated proposal generation",
        "Invoice & payment automation",
        "Appointment scheduling system",
        "Document management & e-signatures",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-surface-dark to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Ready-Made <span className="text-gradient">Templates</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-specific solutions designed for your business type. Start with a proven template 
            and customize it to your exact needs — delivering results in hours, not days or weeks.
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => {
              const Icon = template.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden animate-fade-in"
                >
                  {/* Template Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={`${template.title} template preview`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center glow-blue">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    {/* Title */}
                    <h3 className="text-2xl font-semibold mb-3">{template.title}</h3>

                    {/* Description */}
                    <p className="text-primary font-semibold mb-6 text-sm">
                      {template.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      {template.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Link to="/contact">
                      <Button variant="outline" className="w-full group/btn">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Don't See Your Business Type?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We create custom solutions for any business. Book a free demo and let's discuss 
                how we can help you automate and scale — delivering results in hours, not days or weeks.
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

export default Templates;
