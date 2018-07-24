import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import { Text, View } from "react-native";
import { Avatar, Button } from "react-native-elements";
import DailyHealth from "./DailyHealth";
import moment from "moment";

export default class GetResidentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    };
  }

  render() {
    return (
      <Query
        query={gql`
            {
              getCat(_id: ${this.props.id}) {
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
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                backgroundColor: "white"
              }}
            >
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Avatar
                  xlarge
                  rounded
                  title={data.getCat.name.toUpperCase()}
                  source={{ uri: data.getCat.imageLarge }}
                />
                <Text style={{ flex: 0.9, fontWeight: "bold", fontSize: 15 }}>
                  {data.getCat.name}
                </Text>
                <Text style={{ flex: 0.8, fontSize: 15 }}>
                  {data.getCat.age}
                </Text>
                <Text style={{ flex: 0.8, fontSize: 15 }}>
                  {data.getCat.sex}
                </Text>
              </View>
              <DailyHealth healthData={todayHealthStats[0]} />
              <Button
                title="View Health History"
                onPress={() =>
                  this.props.navigation.navigate("FullHealthHistory", {
                    healthHistory: data.getCat.allHealthStats
                  })
                }
              />
            </View>
          );
        }}
      </Query>
    );
  }
}
