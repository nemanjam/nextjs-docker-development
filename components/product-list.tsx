import { FC } from 'react';
import { searchProducts } from '@/modules/database';

import { SearchParams } from '@/types/url';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/product-card';
import ProductListItem from '@/components/product-list-item';

export interface Props extends SearchParams {}

const ProductList: FC<Props> = async ({ query, display }) => {
  const products = await searchProducts(query);

  const isGrid = display === 'grid';
  const isList = display === 'list';

  const hasProducts = products.length > 0;

  return (
    <>
      {hasProducts ? (
        <>
          <h2 className="text-2xl font-bold mb-6">All Products</h2>

          <ul
            className={cn({
              'grid gap-7 grid-cols-[20rem] sm:grid-cols-2 lg:grid-cols-3 justify-center sm:justify-normal':
                isGrid,
              'flex flex-col gap-4': isList,
            })}
          >
            {products.map((product) => (
              <li key={product.id}>
                {isGrid && <ProductCard product={product} />}
                {isList && <ProductListItem product={product} />}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2 className="text-2xl font-bold mb-6">No products available</h2>
      )}
    </>
  );
};

export default ProductList;
