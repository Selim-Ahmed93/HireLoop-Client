"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AlertCircle, ArrowRight, Loader2, Lock, Mail, User } from "lucide-react"

import { AuthField } from "@/components/auth/auth-field"
import { SocialAuth } from "@/components/auth/social-auth"
import type { SocialProvider } from "@/components/auth/social-auth"
import { signIn, signUp } from "@/lib/auth-client"

export function SignUpForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [socialLoading, setSocialLoading] = useState<SocialProvider | null>(
    null
  )

  const busy = loading || socialLoading !== null

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const password = String(formData.get("password") ?? "")
    const confirmPassword = String(formData.get("confirmPassword") ?? "")

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.")
      return
    }

    setLoading(true)

    try {
      const { error: authError } = await signUp.email({
        name,
        email,
        password,
      })

      if (authError) {
        setError(
          authError.message ||
            "We couldn't create your account. Please try again."
        )
        return
      }

      router.push("/")
      router.refresh()
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  async function handleSocial(provider: SocialProvider) {
    setError(null)
    setSocialLoading(provider)

    try {
      const { error: authError } = await signIn.social({
        provider,
        callbackURL: "/",
      })

      if (authError) {
        setError(
          authError.message ||
            `We couldn't continue with ${provider}. Please try again.`
        )
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setSocialLoading(null)
    }
  }

  return (
    <div>
      <SocialAuth
        onProvider={handleSocial}
        disabled={busy}
        pendingProvider={socialLoading}
      />

      <div className="my-6 flex items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-white/[0.08]" />
        <span className="text-[10.5px] font-medium tracking-[0.14em] text-white/30 uppercase">
          or sign up with email
        </span>
        <span className="h-px flex-1 bg-white/[0.08]" />
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {error ? (
          <div
            role="alert"
            className="flex items-start gap-2.5 rounded-xl border border-[#e5484d]/25 bg-[#e5484d]/10 px-3.5 py-3 text-[12.5px] leading-5 text-[#ff9da1]"
          >
            <AlertCircle
              className="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            <span>{error}</span>
          </div>
        ) : null}

        <AuthField
          label="Full name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Cooper"
          icon={<User className="size-[17px]" />}
          disabled={busy}
          required
        />

        <AuthField
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          icon={<Mail className="size-[17px]" />}
          disabled={busy}
          required
        />

        <AuthField
          label="Password"
          name="password"
          type="password"
          autoComplete="new-password"
          placeholder="Create a password"
          icon={<Lock className="size-[17px]" />}
          hint="Use at least 8 characters with a mix of letters, numbers and symbols."
          disabled={busy}
          minLength={8}
          required
        />

        <AuthField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          placeholder="Repeat your password"
          icon={<Lock className="size-[17px]" />}
          disabled={busy}
          minLength={8}
          required
        />

        <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-[12.5px] leading-5 text-white/50 select-none">
          <input
            type="checkbox"
            name="terms"
            disabled={busy}
            className="mt-0.5 size-4 shrink-0 cursor-pointer rounded-[5px] border border-white/20 bg-white/[0.05] accent-[#6c5ce7] disabled:cursor-not-allowed disabled:opacity-60"
            required
          />
          <span>
            I agree to HireLoop&apos;s{" "}
            <Link
              href="/terms"
              className="font-medium text-[#a89fff] underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-medium text-[#a89fff] underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          disabled={busy}
          className="group mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#6c5ce7] px-5 text-[14.5px] font-semibold text-white shadow-[0_12px_34px_-14px_rgba(108,92,231,0.9)] transition-colors hover:bg-[#7d6ef0] focus-visible:ring-2 focus-visible:ring-[#8b80f9] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f13] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Creating account...
            </>
          ) : (
            <>
              Create account
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
