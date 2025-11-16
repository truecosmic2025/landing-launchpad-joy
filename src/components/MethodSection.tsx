import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import methodIllustration from "@/assets/method-illustration.jpg";

export const MethodSection = () => {
  const steps = [
    {
      number: "1",
      title: "Name the End clearly",
      description: "Phrase your outcome as already real—one natural sentence you can speak with ease.",
    },
    {
      number: "2",
      title: "Pick one technique",
      description: "Choose Inner Speech, SATS, or Revision based on your bottleneck—clarity beats trying everything at once.",
    },
    {
      number: "3",
      title: "Attach a cue",
      description: "Choose a simple AM/PM or event trigger so practice actually happens.",
    },
    {
      number: "4",
      title: "Keep it light",
      description: "Micro steps you can repeat win over dramatic sprints.",
    },
    {
      number: "5",
      title: "Build support",
      description: "If it's a fit, we'll recommend the coaching path that makes it stick.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dark blue background */}
      <div className="absolute inset-0 bg-[#16213e]" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">Shruti's Approach</span> Works
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Shruti's working model
          </p>
          <div className="max-w-md mx-auto mb-8">
            <img 
              src={methodIllustration} 
              alt="5-Step Method Process Diagram" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step) => (
            <Card key={step.number} className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>
                <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/30 backdrop-blur border border-primary/30 rounded-lg p-6 mb-8">
          <p className="text-lg text-foreground text-center">
            <span className="font-semibold">Outcome:</span> Practical clarity and a starter rhythm you can follow—without overthinking.
          </p>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See Your Best-Fit Path
          </Button>
        </div>
      </div>
    </section>
  );
};
