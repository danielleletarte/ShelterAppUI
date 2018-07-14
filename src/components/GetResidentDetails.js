import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import DailyHealth from "./DailyHealth";

const GetResidentDetails = props => (
  <Query
    query={gql`
            {
              getCat(_id: ${props.id}) {
                name
                age
                imageLarge
                _id
                sex
                allHealthStats {
                    date
                    eat
                    urinate
                    poo
                }
              }
            }
        `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;
      console.log(data);

      return (
        <View>
          <Card
            containerStyle={{ margin: 0 }}
            title={data.getCat.name.toUpperCase()}
            image={{ uri: data.getCat.imageLarge }}
          />
          <DailyHealth healthData={data.getCat.allHealthStats[1]} />
        </View>
      );
    }}
  </Query>
);

export default GetResidentDetails;
