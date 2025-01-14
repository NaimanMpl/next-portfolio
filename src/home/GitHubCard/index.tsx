'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const GitHubCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          <FormattedMessage defaultMessage="Also known as..." />
        </CardTitle>
        <CardContent className="p-0">
          <div className="flex items-center gap-3 mt-4">
            <Image
              src="/githubpp.png"
              alt="GitHub Profile"
              width={35}
              height={35}
              className="rounded-full"
            />
            <CardDescription className="font-medium text-base text-white">
              NaimanMpl
            </CardDescription>
          </div>
        </CardContent>
        <CardFooter className="p-0 flex justify-end">
          <Link target="_blank" href="https://github.com/NaimanMpl">
            <Button>
              <Image
                className="mr-2"
                src="/github-icon.svg"
                width={20}
                height={20}
                alt="GitHub"
              />
              <FormattedMessage defaultMessage="See GitHub" />
            </Button>
          </Link>
        </CardFooter>
      </CardHeader>
    </Card>
  );
};

export default GitHubCard;
