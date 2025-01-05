'use client';

import { FC, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: FC<Props> = ({ error, reset }) => {
  //
  useEffect(() => {
    console.error('Caught error:', error);
  }, [error]);

  return (
    <div className="grow flex justify-center items-center">
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Oops! Something went wrong
          </CardTitle>
          <CardDescription>
            We apologize for the inconvenience. An error has occurred.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Error: {error.message || 'An unexpected error occurred.'}
          </p>
          {error.digest && (
            <p className="mt-2 text-xs text-muted-foreground">
              Error ID: {error.digest}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => (window.location.href = '/')}
          >
            Go Home
          </Button>
          <Button onClick={() => reset()}>Try Again</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Error;
