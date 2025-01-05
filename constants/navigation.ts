import { ROUTES } from '@/constants/routes';

export const NAVIGATION = [
  {
    title: 'Store',
    href: ROUTES.STORE,
    external: false,
  },
  {
    title: 'Reviews',
    href: ROUTES.EMPTY,
    external: false,
  },
  {
    title: 'Blog',
    href: ROUTES.EMPTY,
    external: false,
  },
  {
    title: 'Media',
    href: ROUTES.EMPTY,
    external: false,
  },
  {
    title: 'Locations',
    href: ROUTES.EMPTY,
    external: false,
  },
  {
    title: 'Contact',
    href: ROUTES.EMPTY,
    external: false,
  },
] as const;
