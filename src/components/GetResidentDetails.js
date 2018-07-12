import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";

const GetResidentDetails = props => (
  <Query
    query={gql`
            {
              getCat(_id: ${props.id}) {
                name
                age
                image
                _id
              }
            }
        `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;
      console.log(data);

      return (
        <Card title={data.getCat.name} image={{ uri: data.getCat.image }} />
      );
    }}
  </Query>
);

export default GetResidentDetails;
