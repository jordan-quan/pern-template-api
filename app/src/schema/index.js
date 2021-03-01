import { gql } from 'apollo-server-express'

//import exampleSchema from './example'

const linkSchema = gql`
  scalar Date
  scalar JSON

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`
// export all schemas
export default [linkSchema]
