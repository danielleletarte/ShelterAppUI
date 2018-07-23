import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import DailyHealth from "./DailyHealth";
import moment from "moment";

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

      let todayHealthStats = data.getCat.allHealthStats.filter(item =>
        moment(item.date).isSame(moment().format("YYYYMMDD"))
      );
      console.log(todayHealthStats);
      console.log(moment().format("YYYYMMDD"));

      return (
        <View>
          <Card
            containerStyle={{ margin: 0 }}
            title={data.getCat.name.toUpperCase()}
            image={{ uri: data.getCat.imageLarge }}
          />
          <DailyHealth healthData={todayHealthStats[0]} />
        </View>
      );
    }}
  </Query>
);

export default GetResidentDetails;
