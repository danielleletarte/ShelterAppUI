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
                imageLarge
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
        <Card
          containerStyle={{ margin: 0 }}
          flex={1}
          title={data.getCat.name.toUpperCase()}
          image={{ uri: data.getCat.imageLarge }}
        />
      );
    }}
  </Query>
);

export default GetResidentDetails;
