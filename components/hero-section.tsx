import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Briefcase,
  Building2,
  Home,
  MapPin,
  Search,
  Star,
  TrendingUp,
  Users,
} from "lucide-react"

import globe from "@/app/images/globe.png"

const trending = ["Product Designer", "AI Engineering", "Dev-ops Engineer"]

const stats = [
  { icon: Home, value: "50K", label: "Active Jobs" },
  { icon: Building2, value: "12K", label: "Companies" },
  { icon: Users, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

/**
 * Deterministic star positions so the server and client render the same markup
 * (no hydration mismatch) while still looking naturally scattered.
 */
const stars = Array.from({ length: 64 }, (_, index) => {
  const hash = (seed: number) => {
    const value = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453
    return value - Math.floor(value)
  }

  return {
    left: `${(hash(1) * 100).toFixed(2)}%`,
    top: `${(hash(2) * 100).toFixed(2)}%`,
    size: hash(3) > 0.82 ? 2.5 : 1.5,
    opacity: Number((0.14 + hash(4) * 0.46).toFixed(2)),
    duration: `${(3 + hash(5) * 4).toFixed(2)}s`,
    delay: `${(hash(6) * 6).toFixed(2)}s`,
  }
})

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b0b0f]">
      {/* Ambient glow layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_75%_at_50%_-15%,rgba(108,92,231,0.16),transparent_60%)]"
      />

      {/* Starfield */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {stars.map((star, index) => (
          <span
            key={index}
            className="hero-star absolute rounded-full bg-white"
            style={
              {
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                "--star-opacity": star.opacity,
                "--star-duration": star.duration,
                "--star-delay": star.delay,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className="mx-auto flex max-w-[1340px] flex-col items-center px-4 pt-14 text-center sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        {/* Announcement badge */}
        <div className="flex w-full items-center justify-center gap-3 sm:gap-5">
          <span
            aria-hidden="true"
            className="hidden h-px w-full max-w-[110px] bg-gradient-to-r from-transparent via-white/15 to-white/25 sm:block"
          />
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] py-1.5 pr-4 pl-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#f5a524]/15 text-[#f5a524]">
              <Briefcase className="size-3.5" aria-hidden="true" />
            </span>
            <span className="text-[10.5px] font-semibold tracking-[0.16em] text-white/55 uppercase sm:text-[11px]">
              <span className="font-bold tracking-[0.06em] text-white">
                50,000+
              </span>{" "}
              new jobs this month
            </span>
          </div>
          <span
            aria-hidden="true"
            className="hidden h-px w-full max-w-[110px] bg-gradient-to-l from-transparent via-white/15 to-white/25 sm:block"
          />
        </div>

        {/* Headline */}
        <h1 className="mt-7 max-w-4xl text-[2.5rem] leading-[1.08] font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.75rem]">
          Find Your Dream Job Today
        </h1>

        <p className="mt-5 max-w-[570px] text-[15px] leading-7 text-white/55 sm:text-[17px] sm:leading-8">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search */}
        <form
          action="/jobs"
          method="get"
          className="mt-9 w-full max-w-[760px]"
          role="search"
        >
          <div className="flex flex-col gap-1 rounded-2xl border border-white/[0.09] bg-[#17171c]/80 p-2 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.95)] backdrop-blur-xl transition-colors focus-within:border-[#6c5ce7]/50 sm:flex-row sm:items-center sm:gap-0 sm:rounded-[18px]">
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl px-3 py-2.5 sm:px-4">
              <Search
                className="size-[18px] shrink-0 text-white/35"
                aria-hidden="true"
              />
              <label htmlFor="job-query" className="sr-only">
                Job title, skill or company
              </label>
              <input
                id="job-query"
                name="q"
                type="search"
                autoComplete="off"
                placeholder="Job title, skill or company"
                className="w-full min-w-0 bg-transparent text-[15px] text-white placeholder:text-white/40 focus:outline-none [&::-webkit-search-cancel-button]:hidden"
              />
            </div>

            <span
              aria-hidden="true"
              className="mx-4 h-px bg-white/10 sm:mx-0 sm:h-8 sm:w-px"
            />

            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl px-3 py-2.5 sm:px-4">
              <MapPin
                className="size-[18px] shrink-0 text-white/35"
                aria-hidden="true"
              />
              <label htmlFor="job-location" className="sr-only">
                Location or Remote
              </label>
              <input
                id="job-location"
                name="location"
                type="text"
                autoComplete="off"
                placeholder="Location or Remote"
                className="w-full min-w-0 bg-transparent text-[15px] text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              aria-label="Search jobs"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#6c5ce7] text-white transition-colors hover:bg-[#7d6ef0] focus-visible:ring-2 focus-visible:ring-[#8b80f9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#17171c] focus-visible:outline-none sm:size-11 sm:px-0"
            >
              <Search className="size-[18px]" aria-hidden="true" />
              <span className="text-sm font-semibold sm:hidden">
                Search Jobs
              </span>
            </button>
          </div>
        </form>

        {/* Trending searches */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2">
          <span className="inline-flex items-center gap-1.5 pr-1 text-xs font-medium text-white/40">
            <TrendingUp className="size-3.5 text-white/35" aria-hidden="true" />
            Trending Position
          </span>
          {trending.map((term) => (
            <Link
              key={term}
              href={`/jobs?q=${encodeURIComponent(term)}`}
              className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3.5 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-[#6c5ce7]/50 hover:bg-white/[0.07] hover:text-white focus-visible:ring-2 focus-visible:ring-[#8b80f9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0f] focus-visible:outline-none"
            >
              {term}
            </Link>
          ))}
        </div>
      </div>

      {/* Globe + social proof */}
      <div className="relative mt-6 sm:mt-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10"
        >
          <div className="absolute top-[390px] left-1/2 h-[820px] w-[1100px] max-w-[130vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(110,88,255,0.62),rgba(72,54,210,0.3)_38%,rgba(46,32,140,0.1)_58%,transparent_71%)] blur-2xl sm:top-[480px] sm:max-w-[1000px] lg:top-[490px]" />
          <Image
            src={globe}
            alt=""
            aria-hidden="true"
            sizes="(max-width: 640px) 780px, (max-width: 1024px) 900px, 980px"
            className="absolute top-[-340px] left-1/2 w-[780px] max-w-none -translate-x-1/2 brightness-[0.68] contrast-[1.06] saturate-[1.18] select-none [mask-image:radial-gradient(ellipse_68%_58%_at_50%_72%,#000_52%,transparent_82%)] sm:top-[-360px] sm:w-[900px] lg:top-[-430px] lg:w-[980px]"
          />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-44 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/70 to-transparent"
        />

        <div className="relative z-10 mx-auto flex max-w-[1240px] flex-col items-center px-4 sm:px-6 lg:px-8">
          <p className="max-w-[560px] pt-[180px] text-center text-[20px] leading-7 font-medium tracking-[-0.01em] text-white/80 sm:text-[26px] sm:leading-9 lg:pt-[215px] lg:text-[30px] lg:leading-10">
            Assisting over 15,000 job seekers
            <br className="hidden sm:block" /> find their dream positions.
          </p>

          <div className="mt-9 grid w-full max-w-[1180px] grid-cols-2 gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex min-h-[132px] flex-col justify-between rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#1b1b20] to-[#101013] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_40px_-24px_rgba(0,0,0,0.9)] transition-colors hover:border-white/[0.14] sm:min-h-[180px] sm:p-5"
              >
                <span className="grid size-8 place-items-center rounded-lg border border-white/[0.06] bg-white/[0.04] text-white/65 sm:size-9">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[26px] leading-none font-semibold tracking-[-0.02em] text-white sm:text-[36px]">
                    {value}
                  </p>
                  <p className="mt-2 text-[12px] font-medium text-white/45 sm:text-[13px]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-12 sm:h-16 lg:h-20" />
      </div>
    </section>
  )
}
