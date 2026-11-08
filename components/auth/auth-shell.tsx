'use client'
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Sparkles, Star } from "lucide-react"

import logo from "@/app/images/logo.png"

const highlights = [
  "Hand-picked roles from vetted companies",
  "One profile that works across every application",
  "Track interviews, offers and follow-ups in one place",
]

type AuthShellProps = {
  eyebrow: string
  title: string
  subtitle: string
  children: ReactNode
  footer: ReactNode
}

export function AuthShell({
  eyebrow,
  title,
  subtitle,
  children,
  footer,
}: AuthShellProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0b0f]">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_20%_-10%,rgba(108,92,231,0.22),transparent_60%),radial-gradient(70%_60%_at_100%_100%,rgba(108,92,231,0.12),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_35%,transparent_80%)]"
      />

      <div className="mx-auto flex min-h-[calc(100vh-5.25rem)] w-full max-w-[1180px] items-center px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid w-full overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#101014] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.05)] lg:grid-cols-[1.02fr_1fr]">
          {/* Brand / marketing panel */}
          <aside className="relative hidden overflow-hidden bg-gradient-to-br from-[#1b1733] via-[#131220] to-[#0c0c10] p-10 lg:flex lg:flex-col lg:justify-between xl:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-28 -right-24 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(108,92,231,0.45),transparent_65%)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-20 size-[380px] rounded-full bg-[radial-gradient(circle,rgba(139,128,249,0.18),transparent_65%)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_45%,#000_30%,transparent_78%)]"
            />

            <Link
              href="/"
              className="relative z-10 flex w-fit items-center rounded-lg focus-visible:ring-2 focus-visible:ring-[#8b80f9] focus-visible:ring-offset-4 focus-visible:ring-offset-[#131220] focus-visible:outline-none"
            >
              <Image
                src={logo}
                alt="Hireloop"
                priority
                className="h-9 w-auto sm:h-10"
              />
            </Link>

            <div className="relative z-10 pt-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.04] py-1.5 pr-3.5 pl-2 text-[11px] font-semibold tracking-[0.14em] text-white/60 uppercase backdrop-blur-sm">
                <span className="grid size-5 place-items-center rounded-full bg-[#6c5ce7]/25 text-[#b7afff]">
                  <Sparkles className="size-3" aria-hidden="true" />
                </span>
                Your next chapter
              </span>

              <h2 className="mt-6 max-w-[420px] text-[2rem] leading-[1.14] font-semibold tracking-[-0.03em] text-white xl:text-[2.35rem]">
                Land the role you were made for.
              </h2>

              <p className="mt-4 max-w-[400px] text-[14.5px] leading-7 text-white/55">
                Join a community of ambitious people finding work that fits
                their skills, their life and their future.
              </p>

              <ul className="mt-7 space-y-3.5">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[13.5px] leading-6 text-white/70"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-[18px] shrink-0 text-[#8b80f9]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonial */}
            <figure className="relative z-10 mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-0.5 text-[#f5a524]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-3.5 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-3 text-[13.5px] leading-6 text-white/70">
                “HireLoop made my job search feel calm instead of chaotic. I
                found my current role in under three weeks.”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[#8b80f9] to-[#5b4bd6] text-xs font-bold text-white">
                  AR
                </span>
                <span>
                  <span className="block text-[13px] font-semibold text-white">
                    Ayesha Rahman
                  </span>
                  <span className="block text-[11.5px] text-white/45">
                    Product Designer at Northwind
                  </span>
                </span>
              </figcaption>
            </figure>
          </aside>

          {/* Form panel */}
          <div className="relative flex flex-col justify-center bg-[#0f0f13] px-5 py-9 sm:px-9 sm:py-11 lg:px-11 lg:py-12 xl:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
            />

            <Link
              href="/"
              className="mb-8 flex w-fit items-center rounded-lg focus-visible:ring-2 focus-visible:ring-[#8b80f9] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0f0f13] focus-visible:outline-none lg:hidden"
            >
              <Image
                src={logo}
                alt="Hireloop"
                priority
                className="h-9 w-auto"
              />
            </Link>

            <header>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-[#8b80f9] uppercase">
                {eyebrow}
              </p>
              <h1 className="mt-3 text-[1.75rem] leading-tight font-semibold tracking-[-0.02em] text-white sm:text-[2rem]">
                {title}
              </h1>
              <p className="mt-2.5 text-[14px] leading-6 text-white/50">
                {subtitle}
              </p>
            </header>

            <div className="mt-8">{children}</div>

            <div className="mt-7 text-center text-[13.5px] text-white/45">
              {footer}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
