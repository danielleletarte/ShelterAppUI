import React from "react";
import { ScrollView } from "react-native";
import DailyHealth from "./DailyHealth";

export default class FullHealthHistory extends React.Component {
  render() {
    const healthHistory = this.props.healthHistory;
    return (
      <ScrollView>
        {healthHistory.map((healthDay, index) => {
          return <DailyHealth key={index} healthData={healthDay} />;
        })}
      </ScrollView>
    );
  }
}
