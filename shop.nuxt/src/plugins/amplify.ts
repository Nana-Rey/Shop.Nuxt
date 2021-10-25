import Amplify,{ Auth }from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import '@aws-amplify/ui-vue';
import awsconfig from '~/src/aws-exports.js';

import { Plugin } from '@nuxt/types';
Amplify.configure(awsconfig);
Auth.configure(awsconfig);

const myPlugin: Plugin = (context, inject) => {
  Amplify.configure({
    Auth: {
      region: context.nuxtState.config.REGION,
      userPoolId: context.nuxtState.config.COGNITO_USER_POOL_ID,
      userPoolWebClientId:
        context.nuxtState.config.COGNITO_USER_POOL_WEB_CLIENT_ID,
    }
  })
}

export default myPlugin
