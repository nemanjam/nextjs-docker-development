import { FC } from 'react';
import Image from 'next/image';

import { Product } from '@/types/models';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export interface Props {
  product: Product;
}

const ProductListItem: FC<Props> = ({ product }) => {
  const { name, image, description, tags, price } = product;

  return (
    <Card className="grid grid-cols-[12rem,auto] md:grid-cols-[12rem,auto,12rem] lg:grid-cols-[14rem,3fr,1fr,14rem] gap-2 md:gap-16 items-center p-3 rounded-lg">
      <div className="flex items-center gap-2">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-md size-7 object-cover"
        />
        <h2 className="text-lg font-semibold whitespace-nowrap truncate">
          {name}
        </h2>
      </div>

      <p className="text-sm text-muted-foreground truncate hidden md:block">
        {description}
      </p>

      <div className="hidden lg:flex items-center gap-2">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="flex justify-end items-center gap-2">
        <div className="text-lg font-bold hidden xs:block">
          ${price.toFixed(2)}
        </div>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </div>
    </Card>
  );
};

export default ProductListItem;
