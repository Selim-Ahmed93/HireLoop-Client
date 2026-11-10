import { betterAuth } from "better-auth"
import { MongoClient } from "mongodb"
import { mongodbAdapter } from "@better-auth/mongo-adapter"

// এনভায়রনমেন্ট ভেরিয়েবল চেক করা (নিরাপত্তার জন্য)
const uri = process.env.MONGODB_URI as string
if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local")
}

const client = new MongoClient(uri)
const db = client.db("hireloopdb")

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
})