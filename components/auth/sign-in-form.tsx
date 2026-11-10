"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function SignInForm() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")

    // ডাটা কনসোলে চেক করার জন্য
    console.log("Form Submitted Data:", { name, email, password })

    setLoading(true)
    
    // সিমুলেশন বা ব্যাকএন্ড কল
    setTimeout(() => {
      setLoading(false)
      // router.push("/")
    }, 1000)
  }

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-2xl bg-[#121215] border border-white/10 text-white shadow-2xl">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Create Account</h2>
      
      {error && (
        <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-white/70">Full Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="John Doe"
            required 
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-white/70">Email Address</label>
          <input 
            type="email" 
            name="email" 
            placeholder="you@example.com"
            required 
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-white/70">Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder="••••••••"
            required 
            className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:border-transparent transition-all"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          className="w-full mt-2 py-3 px-4 rounded-xl bg-[#6c5ce7] text-white font-medium hover:bg-[#5b4be2] focus:outline-none focus:ring-2 focus:ring-[#6c5ce7] focus:ring-offset-2 focus:ring-offset-[#121215] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center cursor-pointer"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  )
}