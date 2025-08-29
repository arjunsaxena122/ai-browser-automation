"use client";

import { useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";

type AppHeaderProps = {
  userName?: string;
  userEmail?: string;
  avatarUrl?: string;
  onLogout?: () => Promise<void> | void;
};

export function Header({
  userName = "User",
  userEmail = "user@example.com",
  avatarUrl,
  onLogout,
}: AppHeaderProps) {
  const handleLogout = useCallback(async () => {
    if (onLogout) {
      await onLogout();
      return;
    }
    try {
      // If you wire an auth provider, call its signOut here then redirect
      window.location.href = "/";
    } catch {
      window.location.href = "/";
    }
  }, [onLogout]);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:h-16">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-semibold tracking-tight">
            AI Browser
          </Link>
          <span className="hidden text-sm text-muted-foreground md:inline-block">
            Console
          </span>
        </div>

        {/* Right: profile menu */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={avatarUrl || "/placeholder.svg"}
                    alt={`${userName} avatar`}
                  />
                  <AvatarFallback>{userName?.charAt(0) ?? "U"}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{userName}</span>
                  <span className="text-xs text-muted-foreground">
                    {userEmail}
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-destructive focus:text-destructive"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
