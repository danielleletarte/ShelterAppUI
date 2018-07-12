import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import { Text } from "react-native";

import { List, ListItem } from "react-native-elements";

const GetResidentsList = props => (
  <Query
    query={gql`
            {
              getCurrentResidents(resident: ${props.resident}) {
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

      return (
        <List containerStyle={{ marginBottom: 0, marginTop: 0 }}>
          {data.getCurrentResidents.map(({ name, age, image, _id }) => (
            <ListItem
              roundAvatar
              avatar={{ uri: image }}
              key={_id}
              title={name}
              subtitle={age}
              onPress={() =>
                props.navigation.navigate("ResidentDetails", {
                  id: _id
                })
              }
            />
          ))}
        </List>
      );
    }}
  </Query>
);

export default GetResidentsList;
