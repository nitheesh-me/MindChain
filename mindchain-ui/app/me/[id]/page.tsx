import { QueryDetail } from "@/components/query/query-detail";
import { Header } from "@/components/header";

export default function QueryDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <QueryDetail queryId={params.id} />
      </div>
    </main>
  );
}
