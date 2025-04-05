import { Header } from "@/components/header";
import { QueriesView } from "@/components/queries/queries-view";

export default function QueriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <QueriesView />
      </div>
    </main>
  );
}
