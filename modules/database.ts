import { wait } from '@/utils/wait';

import { Product } from '@/types/models';
import { CONFIG } from '@/config/app';
import { products } from '@/data/products';

const { WAIT_DATABASE, TRIGGER_ERROR_SEARCH_QUERY } = CONFIG;

export const searchProducts = async (query = ''): Promise<Product[]> => {
  await wait(WAIT_DATABASE);

  if (!query) return products;

  if (query === TRIGGER_ERROR_SEARCH_QUERY)
    throw new Error('Database test error triggered');

  const lowerCaseQuery = query.trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(lowerCaseQuery)
  );

  return filteredProducts;
};
