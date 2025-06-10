type Session = {
  user: {
    id: string;
    name: string;
    email: string;
    image: string | null;
    createdAt: Date;
  };
  expires: Date;
};
import { cookies } from "next/headers"

// This is a mock implementation for demo purposes
// In a real app, you would use a proper auth provider like NextAuth.js or Supabase

// Define the User type
type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  image: string | null;
  createdAt: Date;
};

// Mock user database
const USERS = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@reflectai.com",
    password: "password123", // In a real app, this would be hashed
    image: null,
    createdAt: new Date(),
  },
]

export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get("session")

  if (!sessionCookie?.value) {
    return null
  }

  try {
    // In a real app, you would verify the session token with your auth provider
    const sessionData = JSON.parse(atob(sessionCookie.value))

    if (new Date(sessionData.expires) < new Date()) {
      return null
    }

    return sessionData as Session
  } catch (error) {
    return null
  }
}

export async function createSession(user: User): Promise<Session> {
  // Remove sensitive data
  const sessionUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
    createdAt: user.createdAt,
  }

  // Create session that expires in 30 days
  const expires = new Date()
  expires.setDate(expires.getDate() + 30)

  const session: Session = {
    user: sessionUser,
    expires,
  }

  // In a real app, you would store the session in your database
  // and only store a session token in the cookie

  // Store session in cookie
  ;(await
        // In a real app, you would store the session in your database
        // and only store a session token in the cookie
        // Store session in cookie
        cookies()).set({
    name: "session",
    value: btoa(JSON.stringify(session)),
    expires,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  })

  return session
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const user = USERS.find((u) => u.email === email)
  return user || null
}

export async function findUserByCredentials(email: string, password: string): Promise<User | null> {
  const user = USERS.find((u) => u.email === email && u.password === password)
  return user || null
}

export async function createUser(userData: {
    image: null; name: string; email: string; password: string 
}): Promise<Omit<User, "password">> {
  // Check if user already exists
  const existingUser = await findUserByEmail(userData.email)
  if (existingUser) {
    throw new Error("User already exists")
  }

  // In a real app, you would hash the password
  const newUser: User & { password: string } = {
    id: `${USERS.length + 1}`,
    name: userData.name,
    email: userData.email,
    password: userData.password,
    image: userData.image ?? null, // Ensure image is explicitly null if undefined
    createdAt: new Date(),
  }

  // In a real app, you would store the user in your database
  USERS.push({ ...newUser, image: null }) // Ensure image is strictly null

  // Return user without password
  const { password, ...user } = newUser
  return user as Omit<User, "password">
}
