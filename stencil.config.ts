import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'sgb9-radio',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
