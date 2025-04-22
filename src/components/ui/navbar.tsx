"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

const tabs = [
  { id: "home", label: "Home", href: "/" },
  { id: "services", label: "Services", href: "/services" },
  { id: "portfolio", label: "Portfolio", href: "/portfolio" },
  //{ id: "team", label: "Team", href: "/team" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [activePath, setActivePath] = React.useState<string>("")

  useEffect(() => {
    setActivePath(window.location.pathname)
    
    const handlePopState = () => setActivePath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.href.startsWith(window.location.origin)) {
        setTimeout(() => setActivePath(window.location.pathname), 0);
      }
    };
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
    };

  }, [])

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur-sm z-50 py-4 border-b border-border">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center text-2xl font-bold text-foreground">
          <img src="/logo.jpeg" alt="Logo" className="h-8 w-8 mr-2" />
          AiWebHub
        </a>
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {tabs.map((tab) => {
                const isActive = activePath === tab.href || (tab.href !== '/' && activePath.startsWith(tab.href));
                return (
                  <NavigationMenuItem key={tab.id}>
                    <NavigationMenuLink 
                      href={tab.href} 
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isActive && 'font-bold text-accent'
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {tab.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4 px-4">
                {tabs.map((tab) => {
                  const isActive = activePath === tab.href || (tab.href !== '/' && activePath.startsWith(tab.href));
                  return (
                    <SheetClose asChild key={tab.id}>
                      <a
                        href={tab.href}
                        className={cn(
                          "text-left text-lg text-muted-foreground hover:text-foreground transition-colors",
                          isActive && "font-bold text-accent"
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {tab.label}
                      </a>
                    </SheetClose>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}