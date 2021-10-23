import Amplify, { graphqlOperation } from 'aws-amplify'
import awsConfig from '@/src/aws-exports'

Amplify.configure(awsConfig)

export default ({ app }, inject) => {
  inject('graphql', (operation, vars = {}) => Amplify.API.graphql(graphqlOperation(operation, vars)))
}