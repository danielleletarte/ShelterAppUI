import React from "react";
import { ScrollView } from "react-native";
import DailyHealth from "./DailyHealth";

export default class FullHealthHistory extends React.Component {
  render() {
    const healthHistory = this.props.healthHistory;
    return (
      <ScrollView>
        {healthHistory.map(healthDay => {
          return <DailyHealth key={healthDay._id} healthData={healthDay} />;
        })}
      </ScrollView>
    );
  }
}
