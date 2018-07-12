import React from "react"
import ShelterApp from "./components/ShelterApp"

import { ApolloProvider } from "react-apollo"
import { AppRegistry } from "react-native"
import ApolloClient from "apollo-boost"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

const App = () => (
  <ApolloProvider client={client}>
    <ShelterApp />
  </ApolloProvider>
)

export default App

AppRegistry.registerComponent("ShelterAppUI", () => App)
