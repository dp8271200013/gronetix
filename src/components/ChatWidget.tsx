import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [hasEmail, setHasEmail] = useState(false);

  const handleAction = async (action: string) => {
    const webhookUrl = "YOUR_WEBHOOK_URL_HERE"; // Replace with actual webhook URL
    
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action,
          email: hasEmail ? email : null,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Webhook error:", error);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setHasEmail(true);
      handleAction("email_captured");
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl glow-blue hover:scale-110 transition-transform z-50"
        size="icon"
        variant="hero"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Widget */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 sm:w-96 shadow-2xl z-50 border-primary/30 animate-fade-in">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-primary to-accent p-4 text-white rounded-t-lg">
              <h3 className="font-semibold text-lg">ScaleBuddy 👋</h3>
              <p className="text-sm opacity-90">How can I help you today?</p>
            </div>

            <div className="p-4 space-y-3">
              {!hasEmail ? (
                <>
                  <p className="text-sm text-muted-foreground">
                    Hi — I'm ScaleBuddy 👋 I can show demos, answer pricing, or book a free 15-minute demo.
                  </p>
                  
                  <form onSubmit={handleEmailSubmit} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="you@business.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background"
                    />
                    <Button type="submit" className="w-full" variant="hero">
                      Get Started
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground mb-3">
                    Great! What would you like to do?
                  </p>
                  <Button
                    onClick={() => handleAction("see_demos")}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    See demos
                  </Button>
                  <Button
                    onClick={() => handleAction("book_demo")}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    Book a demo
                  </Button>
                  <Button
                    onClick={() => handleAction("pricing")}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    Pricing
                  </Button>
                  <Button
                    onClick={() => handleAction("talk_to_human")}
                    variant="outline"
                    className="w-full justify-start"
                  >
                    Talk to human
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatWidget;
