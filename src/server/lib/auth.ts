import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/server/db'

// authentication configuration
export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_URL,
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  socialProviders: {
    github: {
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    },
    google: {
      prompt: 'select_account',
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    },
  },
})
