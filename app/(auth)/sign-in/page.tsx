import type { Metadata } from "next"
import Link from "next/link"

import { AuthShell } from "@/components/auth/auth-shell"
import { SignInForm } from "@/components/auth/sign-in-form"

export const metadata: Metadata = {
  title: "Sign In | HireLoop",
  description:
    "Sign in to your HireLoop account to continue your job search, track applications and connect with top companies.",
}

export default function SignInPage() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Sign in to your account"
      subtitle="Pick up where you left off and keep your job search moving."
      footer={
        <>
          New to HireLoop?{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-[#a89fff] transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#8b80f9]/70 focus-visible:outline-none"
          >
            Create an account
          </Link>
        </>
      }
    >
      <SignInForm />
    </AuthShell>
  )
}
