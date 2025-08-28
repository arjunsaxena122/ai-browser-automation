import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Play, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 sm:mb-8 inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-card-foreground">
            <Zap className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-accent" />
            {"Powered by Advanced AI Technology"}
          </div>

          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-foreground text-balance leading-tight">
            Automate Your Browser Tasks with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Intelligent AI
            </span>
          </h1>

          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Transform repetitive browser tasks into automated workflows. Our AI
            understands web pages like humans do, making automation accessible
            to everyone.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row px-4 sm:px-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="group w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                >
                  Start Automating Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="mx-4 sm:mx-0 sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Start Your Free Trial</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="hero-name">Full Name</Label>
                    <Input id="hero-name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-email">Email</Label>
                    <Input
                      id="hero-email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-password">Password</Label>
                    <Input
                      id="hero-password"
                      type="password"
                      placeholder="Create a password"
                    />
                  </div>
                  <Button className="w-full">Start Free Trial</Button>
                  <p className="text-xs text-muted-foreground text-center">
                    No credit card required. 14-day free trial.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              variant="outline"
              size="lg"
              className="group bg-transparent w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 text-xs sm:text-sm text-muted-foreground">
            <p>Trusted by 10,000+ professionals worldwide</p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] lg:h-[800px] lg:w-[800px] xl:h-[1000px] xl:w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl" />
      </div>
    </section>
  );
}
