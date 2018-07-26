import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import { Text, View } from "react-native";
import { Avatar, Button } from "react-native-elements";
import DailyHealth from "./DailyHealth";
import FullHealthHistory from "./FullHealthHistory";
import moment from "moment";

export default class GetResidentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false
    };

    this.healthHistoryClick = this.healthHistoryClick.bind(this);
  }

  renderHealthData(allHealthStats, todayHealthStats) {
    if (this.state.buttonClicked === false) {
      return <DailyHealth healthData={todayHealthStats[0]} />;
    } else {
      return <FullHealthHistory healthHistory={allHealthStats} />;
    }
  }

  healthHistoryClick() {
    this.setState({ buttonClicked: !this.state.buttonClicked });
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
                    _id
                    date
                    eat
                    urinate
                    poo
                    notes
                }
              }
            }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          let allHealthStats = data.getCat.allHealthStats;
          let todayHealthStats = data.getCat.allHealthStats.filter(item =>
            moment(item.date).isSame(moment().format("YYYYMMDD"))
          );

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
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column"
                  }}
                >
                  <Text
                    style={{
                      flex: 0.5,
                      fontWeight: "bold",
                      fontSize: 25,
                      marginLeft: 30
                    }}
                  >
                    {data.getCat.name}
                  </Text>
                  <Text style={{ flex: 0.25, fontSize: 20, marginLeft: 30 }}>
                    {data.getCat.age} years
                  </Text>
                  <Text style={{ flex: 0.25, fontSize: 20, marginLeft: 30 }}>
                    {data.getCat.sex === "M" ? "Male" : "Female"}
                  </Text>
                </View>
              </View>
              <Button
                title={
                  this.state.buttonClicked
                    ? "Hide Full History"
                    : "View Full Health History"
                }
                onPress={this.healthHistoryClick}
              />
              {this.renderHealthData(allHealthStats, todayHealthStats)}
            </View>
          );
        }}
      </Query>
    );
  }
}
