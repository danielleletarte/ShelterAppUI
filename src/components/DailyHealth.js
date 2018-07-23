import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-elements";
import HealthSelection from "./HealthSelection";
import moment from "moment";

const DailyHealth = props => (
  <Card>
    <Text>
      {props.healthData
        ? moment(props.healthData.date).format("MMMM Do YYYY")
        : moment().format("MMMM Do YYYY")}
    </Text>
    <HealthSelection
      task={props.healthData ? props.healthData.urinate : false}
      edit={true}
      text={"Urinate"}
    />
    <HealthSelection
      task={props.healthData ? props.healthData.poo : false}
      edit={false}
      text={"Poo"}
    />
    <HealthSelection
      task={props.healthData ? props.healthData.eat : false}
      edit={false}
      text={"Eat"}
    />
  </Card>
);

export default DailyHealth;
