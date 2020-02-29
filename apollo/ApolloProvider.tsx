import React from 'react'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import { ApolloProvider as ApolloProviderReact } from '@apollo/react-hooks'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8087/graphql',
  }),
  cache: new InMemoryCache(),
})

const ApolloProvider = ({ children }) => {
  return <ApolloProviderReact client={client}>{children}</ApolloProviderReact>
}

export default ApolloProvider
