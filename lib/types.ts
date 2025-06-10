export type User = {
  id: string
  name?: string | null
  email: string
  image?: string | null
  createdAt: Date
}

export type Session = {
  user: User
  expires: Date
}

export type AuthError = {
  type: string
  message: string
}
