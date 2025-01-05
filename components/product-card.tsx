import { FC } from 'react';
import Image from 'next/image';

import { Product } from '@/types/models';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const { name, image, description, tags, price } = product;

  return (
    <Card className="overflow-hidden min-h-full flex flex-col">
      <Image
        src={image}
        alt={name}
        width={1080}
        height={720}
        className="h-36 w-full object-cover"
      />
      <CardContent className="p-4 flex-1">
        <div className="flex flex-col items-start mb-1">
          <span>${price.toFixed(2)}</span>
          <h3 className="font-medium text-lg line-clamp-1">{name}</h3>
        </div>
        <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="outline" size="lg">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
