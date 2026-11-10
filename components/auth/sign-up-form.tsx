"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function SignUpForm() {
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

    // আপাতত ব্যাকএন্ড ছাড়াই ডাটা কনসোলে দেখার জন্য:
    console.log("Form Submitted Data:", { name, email, password })

    setLoading(true)
    
    // সিমুলেশন বা ব্যাকএন্ড কল এখানে হবে
    setTimeout(() => {
      setLoading(false)
      // router.push("/")
    }, 1000)
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", background: "#111", color: "#fff", borderRadius: "8px" }}>
      <h2>Create Account</h2>
      
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label>Full Name</label>
          <input type="text" name="name" required style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>

        <div>
          <label>Email Address</label>
          <input type="email" name="email" required style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" required style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
        </div>

        <button type="submit" disabled={loading} style={{ padding: "10px", background: "#6c5ce7", color: "#fff", border: "none", cursor: "pointer" }}>
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
    </div>
  )
}