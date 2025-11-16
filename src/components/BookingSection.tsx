import { Card, CardContent } from "@/components/ui/card";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Users, MessageCircle, CheckCircle } from "lucide-react";

export const BookingSection = () => {
  const steps = [
    {
      number: "1",
      title: "Answer some quick questions",
      description: "Your aim, biggest sticking point, preferred outcome",
    },
    {
      number: "2",
      title: "Pick a time with Pramita",
      description: "Choose a convenient slot from our calendar",
    },
    {
      number: "3",
      title: "Check your email for prep",
      description: "You'll get a confirmation email with the Zoom join info.",
    },
    {
      number: "4",
      title: "We meet on Zoom/phone",
      description: "You'll leave with a clear plan",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="booking">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#1a1a2e]" />
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Book Your Free Session
          </h2>
          <p className="text-xl text-muted-foreground">
            Start a conversation to see if we're a fit
          </p>
        </div>

        {/* Chatbot Instructions Card */}
        <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 mb-12 max-w-3xl mx-auto">
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Let's Talk About Your Goals
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Click the chat icon to start a conversation. Our AI assistant will ask you a few questions to understand your needs and help you schedule your free session.
                </p>
              </div>
              
              <div className="w-full max-w-md space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Quick qualifying questions about your goals</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Personalized recommendations based on your needs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Direct calendar access to book your free session</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-background/50 rounded-lg border border-primary/20">
                <p className="text-sm text-foreground font-semibold">
                  👉 Look for the chat icon in the bottom-left corner of your screen
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works Steps */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            What to Expect
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <Card key={step.number} className="bg-card/50 backdrop-blur border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Urgency Section */}
        <div className="bg-card/30 backdrop-blur border border-primary/30 rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-primary">
              <Users className="w-5 h-5" />
              <p className="font-semibold">12 people are viewing this page right now</p>
            </div>
            <CountdownTimer />
            <p className="text-sm text-muted-foreground">Book within the next 24 hours to secure this week's slot</p>
          </div>
        </div>
      </div>
    </section>
  );
};