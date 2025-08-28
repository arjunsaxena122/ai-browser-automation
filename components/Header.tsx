"use client";

import { useState } from "react";
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
import { Bot, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          <span className="text-lg sm:text-xl font-bold text-foreground">
            AutomateAI
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </DialogTrigger>
            <DialogContent className="mx-4 sm:mx-0 sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Sign In to AutomateAI</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <Button className="w-full">Sign In</Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm">Get Started</Button>
            </DialogTrigger>
            <DialogContent className="mx-4 sm:mx-0 sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Create Your Account</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input id="signup-name" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Create a password"
                  />
                </div>
                <Button className="w-full">Create Account</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 sm:px-6 py-4 space-y-4">
            <nav className="space-y-2">
              <a
                href="#features"
                className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
              >
                Pricing
              </a>
            </nav>
            <div className="flex flex-col space-y-2 pt-2 border-t border-border">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="justify-start">
                    Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent className="mx-4 sm:mx-0 sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Sign In to AutomateAI</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="mobile-email">Email</Label>
                      <Input
                        id="mobile-email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile-password">Password</Label>
                      <Input
                        id="mobile-password"
                        type="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <Button className="w-full">Sign In</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" className="justify-start">
                    Get Started
                  </Button>
                </DialogTrigger>
                <DialogContent className="mx-4 sm:mx-0 sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Create Your Account</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="mobile-signup-name">Full Name</Label>
                      <Input
                        id="mobile-signup-name"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile-signup-email">Email</Label>
                      <Input
                        id="mobile-signup-email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile-signup-password">Password</Label>
                      <Input
                        id="mobile-signup-password"
                        type="password"
                        placeholder="Create a password"
                      />
                    </div>
                    <Button className="w-full">Create Account</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
