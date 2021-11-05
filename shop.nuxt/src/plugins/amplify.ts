import Amplify,{ Auth }from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import '@aws-amplify/ui-vue';
import awsconfig from '~/src/aws-exports.js';
import aws_exports from '~/src/aws-exports.js'
import { Plugin } from '@nuxt/types';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});
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
