"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col bg-gray-900 border-gray-800 text-white">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">CreatorCard</span>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white"
            onClick={() => setOpen(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <nav className="mt-8 flex flex-col gap-4">
          <Link href="#features" className="text-lg font-medium" onClick={() => setOpen(false)}>
            Benefits
          </Link>
          <Link href="#testimonials" className="text-lg font-medium" onClick={() => setOpen(false)}>
            Creator Stories
          </Link>
          <Link href="#eligibility" className="text-lg font-medium" onClick={() => setOpen(false)}>
            Eligibility
          </Link>
          <Link href="#faq" className="text-lg font-medium" onClick={() => setOpen(false)}>
            FAQ
          </Link>
        </nav>
        <div className="mt-auto flex flex-col gap-2">
          <Link href="#" className="text-lg font-medium" onClick={() => setOpen(false)}>
            Log In
          </Link>
          <Button
            className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-black hover:from-yellow-600 hover:to-amber-600"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
