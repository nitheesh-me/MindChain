import { Header } from "@/components/header";
import { ExpertDashboard } from "@/components/expert/expert-dashboard";

export default function ExpertDashboardPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <ExpertDashboard />
      </div>
    </main>
  );
}
