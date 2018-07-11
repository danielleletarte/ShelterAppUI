import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>=^-^=</Text>
      </View>
    );
  }
}

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

client
    .query({
        query: gql`
      {
        getAllCats {
          name
          resident
          age
        }
      }
    `
    })
    .then(result => console.log(result));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
