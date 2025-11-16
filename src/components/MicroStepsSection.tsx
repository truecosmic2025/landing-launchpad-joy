import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MicroStepsSection = () => {
  const techniques = [
    {
      title: "If Inner Speech is chosen:",
      step: 'When the old line appears, say your new line once and move on: "I show up as someone it already worked for."',
    },
    {
      title: "If SATS is chosen:",
      step: "Tonight, run a 10–20 second scene seed twice (one place, one touch, one line you hear), calmly.",
    },
    {
      title: "If Revision is chosen:",
      step: "Take one moment from today that carried the old story; re-see it once with your new meaning; continue your day.",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f3460] to-[#16213e]" />
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Sample Micro-Steps
          </h2>
          <p className="text-xl text-muted-foreground">Based on the technique</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {techniques.map((technique, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{technique.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{technique.step}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
