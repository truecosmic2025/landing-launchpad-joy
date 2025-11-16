import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    "You've consumed tons of content but still feel stuck on the same loop.",
    "Your self-talk wobbles—progress for two days, then doubt derails you.",
    "You're juggling big aims but lack a first, doable step.",
    "You want grounded guidance—clarity, structure, and consistency.",
  ];

  const solutions = [
    "A quick read on your primary bottleneck.",
    "One natural End sentence you can live from.",
    "One recommended technique to begin (Inner Speech / SATS / Revision).",
    "A personal coaching recommendation so you know what to do next.",
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f3460] via-[#1a1a2e] to-[#16213e]" />
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Is this you? */}
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Does this sound familiar?</h2>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What changes here */}
          <Card className="bg-card/50 backdrop-blur border-primary/30">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-6 text-foreground">What you'll gain here:</h2>
              <ul className="space-y-4 mb-8">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Clarity Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
