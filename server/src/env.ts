import { z } from 'zod'

const envSchema = z.object({
  URL_CONNECTION_VIEW: z.string().url(),
  URL_CONNECTION_DB: z.string().url(),
})

export const env = envSchema.parse(process.env)