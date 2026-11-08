"use client"

import { Loader2 } from "lucide-react"

export type SocialProvider = "google" | "github"

type SocialAuthProps = {
  onProvider?: (provider: SocialProvider) => void
  disabled?: boolean
  pendingProvider?: SocialProvider | null
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-[18px]" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-[18px]"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

const buttonClass =
  "inline-flex h-11 items-center justify-center gap-2.5 rounded-xl border border-white/[0.1] bg-white/[0.035] px-4 text-[13.5px] font-medium text-white/85 transition-colors hover:border-white/[0.18] hover:bg-white/[0.06] hover:text-white focus-visible:ring-2 focus-visible:ring-[#8b80f9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f13] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"

export function SocialAuth({
  onProvider,
  disabled = false,
  pendingProvider = null,
}: SocialAuthProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={() => onProvider?.("google")}
        disabled={disabled}
        className={buttonClass}
      >
        {pendingProvider === "google" ? (
          <Loader2 className="size-[18px] animate-spin" aria-hidden="true" />
        ) : (
          <GoogleIcon />
        )}
        Google
      </button>
      <button
        type="button"
        onClick={() => onProvider?.("github")}
        disabled={disabled}
        className={buttonClass}
      >
        {pendingProvider === "github" ? (
          <Loader2 className="size-[18px] animate-spin" aria-hidden="true" />
        ) : (
          <GitHubIcon />
        )}
        GitHub
      </button>
    </div>
  )
}
