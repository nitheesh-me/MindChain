import { Header } from "@/components/header"
import { ProfileView } from "@/components/profile/profile-view"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <ProfileView />
      </div>
    </main>
  )
}

