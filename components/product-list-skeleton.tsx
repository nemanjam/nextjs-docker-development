import { FC } from 'react';

import { SearchParams } from '@/types/url';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export interface Props extends Pick<SearchParams, 'display'> {}

const NUMBER_OF_ITEMS = 3 as const;

const ProductListSkeleton: FC<Props> = ({ display }) => {
  const isGrid = display === 'grid';
  const isList = display === 'list';

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Loading...</h2>
      <ul
        className={cn({
          'grid gap-7 grid-cols-[20rem] sm:grid-cols-2 lg:grid-cols-3 justify-center sm:justify-normal':
            isGrid,
          'flex flex-col gap-4': isList,
        })}
      >
        {Array.from({ length: NUMBER_OF_ITEMS }, (_, i) => i).map((index) => (
          <li key={index}>
            {isGrid && <ProductCardSkeleton />}
            {isList && <ProductListItemSkeleton />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductListSkeleton;

export const ProductCardSkeleton = () => (
  <Card>
    <Skeleton className="h-36 w-full" />

    <CardContent className="p-4 space-y-6">
      <div>
        <Skeleton className="size-8" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>

      <div className="flex gap-2">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </CardContent>

    <CardFooter className="p-4 pt-0">
      <Skeleton className="h-4 w-3/4" />
    </CardFooter>
  </Card>
);

export const ProductListItemSkeleton = () => (
  <Card className="flex items-center justify-between p-3">
    <div className="flex gap-2 items-center">
      <Skeleton className="size-7 rounded-md" />
      <Skeleton className="h-4 w-32" />
    </div>

    <Skeleton className="h-4 w-48 hidden md:block" />

    <div className="hidden lg:flex gap-2">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-16" />
    </div>

    <div className="flex gap-2 items-center">
      <Skeleton className="h-4 w-16 hidden xs:block" />
      <Skeleton className="h-9 w-24 rounded-md" />
    </div>
  </Card>
);
