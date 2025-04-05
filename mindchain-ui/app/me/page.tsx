import { DashboardView } from "@/components/dashboard/dashboard-view";
import { Header } from "@/components/header";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <DashboardView />
      </div>
    </main>
  );
}
