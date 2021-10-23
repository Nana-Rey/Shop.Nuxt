import Amplify from 'aws-amplify'
import { Plugin } from '@nuxt/types'

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
