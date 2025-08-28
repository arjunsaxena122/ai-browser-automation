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
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Free 14-day trial",
  "No credit card required",
  "Cancel anytime",
  "24/7 support included",
];

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary-foreground text-balance leading-tight">
            Ready to Transform Your Workflow?
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-primary-foreground/90 text-pretty leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
            Join thousands of professionals who have automated their browser
            tasks and reclaimed their time.
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-primary-foreground/80">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center sm:justify-start lg:justify-center"
              >
                <CheckCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 px-4 sm:px-0">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="secondary"
                  className="group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  Start Your Free Trial Today
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="mx-4 sm:mx-0 sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Start Your Free Trial</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="cta-name">Full Name</Label>
                    <Input id="cta-name" placeholder="Enter your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cta-email">Work Email</Label>
                    <Input
                      id="cta-email"
                      type="email"
                      placeholder="Enter your work email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cta-password">Password</Label>
                    <Input
                      id="cta-password"
                      type="password"
                      placeholder="Create a secure password"
                    />
                  </div>
                  <Button className="w-full">Start Free Trial</Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By signing up, you agree to our Terms of Service and Privacy
                    Policy.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-primary-foreground/70">
            No setup fees • No hidden costs • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
