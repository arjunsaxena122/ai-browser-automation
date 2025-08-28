import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, Clock, Code, Globe, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description:
      "Our advanced AI understands web pages and performs tasks just like a human would, but faster and more accurately.",
  },
  {
    icon: Code,
    title: "No-Code Solution",
    description:
      "Create complex automation workflows without writing a single line of code. Visual interface makes it simple for everyone.",
  },
  {
    icon: Clock,
    title: "Save Hours Daily",
    description:
      "Automate repetitive tasks like data entry, form filling, and web scraping to focus on what matters most.",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description:
      "Compatible with any website or web application. From e-commerce to social media, automate across the entire web.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and security measures ensure your data and automations are always protected.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Execute automations at superhuman speed with our optimized infrastructure and intelligent task scheduling.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight">
            Powerful Features for Modern Automation
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed px-4 sm:px-0">
            Everything you need to automate your browser tasks and streamline
            your workflow
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <CardHeader className="pb-4">
                <div className="mb-3 sm:mb-4 inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
