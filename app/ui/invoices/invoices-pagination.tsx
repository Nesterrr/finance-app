import Pagination from '@/app/ui/invoices/pagination';
import { fetchInvoicesPages } from '@/app/lib/data';

export default async function InvoicesPagination({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const params = await searchParams;
  const query = params?.query || '';
  const totalPages = await fetchInvoicesPages(query);

  return <Pagination totalPages={totalPages} />;
}
