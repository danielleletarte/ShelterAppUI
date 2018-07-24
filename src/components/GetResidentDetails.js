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
