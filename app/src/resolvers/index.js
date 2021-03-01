import { GraphQLDateTime } from 'graphql-iso-date'
import GraphQLJSON from 'graphql-type-json'

//import exampleResolver from './example'

const customScalarResolver = {
  Date: GraphQLDateTime,
  JSON: GraphQLJSON
}

//export all resolvers
export default [customScalarResolver]
