"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import logo from "@/app/images/logo.png"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1340px] rounded-2xl border border-white/[0.06] bg-[#19191c]/95 shadow-[0_16px_40px_-20px_rgba(0,0,0,0.85)] backdrop-blur-md">
        <div className="flex h-16 items-center justify-between gap-6 px-5 sm:h-[68px] sm:px-7">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={logo}
              alt="Hireloop"
              priority
              className="h-9 w-auto sm:h-10"
            />
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <span
              className="h-5 w-px shrink-0 bg-white/20"
              aria-hidden="true"
            />

            <div className="flex items-center gap-6">
              <Link
                href="/sign-in"
                className="text-[15px] font-medium text-[#8b80f9] transition-colors hover:text-[#a89fff]"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[#6c5ce7] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#7d6ef0] focus-visible:ring-2 focus-visible:ring-[#8b80f9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#19191c] focus-visible:outline-none"
              >
                Get Started
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-lg text-white/85 transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-[#8b80f9] focus-visible:outline-none md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "grid overflow-hidden transition-all duration-300 ease-out md:hidden",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="min-h-0">
            <div className="flex flex-col gap-1 border-t border-white/[0.06] px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-3 h-px bg-white/[0.08]" aria-hidden="true" />

              <Link
                href="/sign-in"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-[#8b80f9] transition-colors hover:bg-white/[0.06] hover:text-[#a89fff]"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex h-11 items-center justify-center rounded-xl bg-[#6c5ce7] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#7d6ef0]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
