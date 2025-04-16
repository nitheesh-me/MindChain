import { QueryDetail } from "@/components/query/query-detail";
import { Header } from "@/components/header";

export default async function QueryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <QueryDetail queryId={resolvedParams.id} />
      </div>
    </main>
  );
}
