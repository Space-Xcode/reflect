import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"


export default async function DashboardPage() {
  const session = await getSession()

  if (!session) {
    redirect("/log-in")
  }

    return (
        <div>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard, {session.user.name}!</p>
        </div>
    )
}
