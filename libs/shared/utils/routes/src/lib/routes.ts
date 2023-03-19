export const routes = {
  dashboard: {
    path: '/*',
    url: () => '/',
  },
  game: {
    path: '/game',
    url: () => '/game',
    details: {
      path: ':id',
      url: (id: string) => '/game/:id'.replace(':id', id),
    },
  },
  multimedia: {
    path: '/multimedia',
    url: () => '/multimedia',
    details: {
      path: ':id',
      url: (id: string) => '/multimedia/:id'.replace(':id', id),
    },
  },
  settings: {
    path: '/settings/*',
    url: () => '/settings',
    details: {
      path: ':id',
      url: (id: string) => '/settings/:id'.replace(':id', id),
    },
  },
};
