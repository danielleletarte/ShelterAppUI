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
                imageSmall
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
          {data.getCurrentResidents.map(({ name, age, imageSmall, _id }) => (
            <ListItem
              containerStyle={{ borderBottomWidth: 0 }}
              roundAvatar
              avatar={{ uri: imageSmall }}
              key={_id}
              title={name}
              onPress={() =>
                props.navigation.navigate("ResidentDetails", {
                  id: _id,
                  navigation: props.navigation
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
