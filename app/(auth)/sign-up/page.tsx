import type { Metadata } from "next"
import Link from "next/link"

import { AuthShell } from "@/components/auth/auth-shell"
import { SignUpForm } from "@/components/auth/sign-up-form"

export const metadata: Metadata = {
  title: "Create Account | HireLoop",
  description:
    "Create your free HireLoop account and get matched with hand-picked roles from vetted companies.",
}

export default function SignUpPage() {
  return (
    <AuthShell
      eyebrow="Get started"
      title="Create your account"
      subtitle="Join thousands of professionals finding work they love."
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-[#a89fff] transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#8b80f9]/70 focus-visible:outline-none"
          >
            Sign in
          </Link>
        </>
      }
    >
      <SignUpForm />
    </AuthShell>
  )
}
