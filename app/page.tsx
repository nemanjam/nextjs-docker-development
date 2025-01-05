import { FC } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';

const { STORE } = ROUTES;

const IndexPage: FC = () => {
  return (
    <>
      <h1 className="text-3xl font-bold md:text-4xl mb-8">Home page</h1>
      <p className="max-w-[700px] text-lg flex items-center">
        <span>Go to the</span>
        <Link href={STORE}>
          <Button variant="link" className="text-lg px-2">
            Store page
          </Button>
        </Link>
      </p>
    </>
  );
};

export default IndexPage;
