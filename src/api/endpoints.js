const endpoints = {
  types: {
    path: '/type',
    method: ['GET'],
    alias: 'Types',
    options: {
      get: {
        query: ['limit', 'offset'],
      },
    },
  },
  type: {
    path: '/type/:name',
    method: ['GET'],
    alias: 'Type',
  },
};

export default endpoints;
