"use client"

import React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-blue-600">
          ReflectAI
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">ReflectAI Platform</div>
                          <p className="text-sm leading-tight text-white/90">
                            Our comprehensive AI solution for business intelligence and automation
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/products/analytics" title="Analytics">
                      Transform data into actionable insights
                    </ListItem>
                    <ListItem href="/products/automation" title="Automation">
                      Streamline workflows and processes
                    </ListItem>
                    <ListItem href="/products/integration" title="Integration">
                      Connect with your existing tools
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/case-studies" title="Case Studies">
                      See how others are using ReflectAI
                    </ListItem>
                    <ListItem href="/troubleshooting/faq" title="FAQ">
                      Frequently asked questions
                    </ListItem>
                    <ListItem href="/troubleshooting/common-issues" title="Common Issues">
                      Troubleshooting guides and solutions
                    </ListItem>
                    <ListItem href="/troubleshooting/support" title="Support">
                      Get help from our team
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Button variant="outline">Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50 md:hidden">
            <div className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <Link href="/products" className="block py-2 font-medium">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="block py-2">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/troubleshooting/faq" className="block py-2">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/troubleshooting/common-issues" className="block py-2">
                    Common Issues
                  </Link>
                </li>
                <li>
                  <Link href="/troubleshooting/support" className="block py-2">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="block py-2">
                    Pricing
                  </Link>
                </li>
                <li className="pt-4 border-t">
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline" className="w-full">
                      Log In
                    </Button>
                    <Button className="w-full">Sign Up</Button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-slate-500">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
