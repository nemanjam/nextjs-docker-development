import { FC, Suspense } from 'react';

import { SearchParams } from '@/types/url';
import ProductList from '@/components/product-list';
import ProductListSkeleton from '@/components/product-list-skeleton';
import Search from '@/components/search';
import { QUERY_PARAMS } from '@/constants/url';

export interface Props {
  searchParams?: Promise<SearchParams>;
}

const { QUERY, DISPLAY } = QUERY_PARAMS;

const StorePage: FC<Props> = async (props) => {
  const searchParams = await props.searchParams;
  const { query = QUERY.DEFAULT_VALUE, display = DISPLAY.DEFAULT_VALUE } =
    searchParams ?? {};

  return (
    <>
      <Search />
      <Suspense
        key={query}
        fallback={<ProductListSkeleton display={display} />}
      >
        <ProductList query={query} display={display} />
      </Suspense>
    </>
  );
};

export default StorePage;
