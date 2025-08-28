import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, MousePointer, Play, Settings } from "lucide-react";

const steps = [
  {
    icon: MousePointer,
    title: "Record Your Actions",
    description:
      "Simply perform the task once while our AI watches and learns your workflow patterns.",
  },
  {
    icon: Settings,
    title: "Customize & Configure",
    description:
      "Fine-tune your automation with our intuitive interface. Set conditions, loops, and data handling.",
  },
  {
    icon: Play,
    title: "Run & Scale",
    description:
      "Execute your automations on demand or schedule them to run automatically. Scale to thousands of tasks.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight">
            How It Works
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed px-4 sm:px-0">
            Get started with browser automation in three simple steps
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3 xl:gap-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <step.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <div className="mb-2 text-xs sm:text-sm font-semibold text-primary">
                    Step {index + 1}
                  </div>
                  <CardTitle className="text-lg sm:text-xl">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 lg:-right-4 xl:-right-5 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
