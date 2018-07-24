import React from "react";
import { Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import HealthSelection from "./HealthSelection";
import moment from "moment";

const DailyHealth = props => (
  <Card>
    <View style={{ flexDirection: "row" }}>
      <Text style={{ flex: 1, fontWeight: "bold" }}>
        {props.healthData
          ? moment(props.healthData.date).format("MMMM Do YYYY")
          : moment().format("MMMM Do YYYY")}
      </Text>
      <Icon name="edit" size={20} />
    </View>
    <HealthSelection
      task={props.healthData ? props.healthData.urinate : false}
      edit={true}
      text={"Urinate"}
    />
    <HealthSelection
      task={props.healthData ? props.healthData.poo : false}
      edit={false}
      text={"Feces"}
    />
    <HealthSelection
      task={props.healthData ? props.healthData.eat : false}
      edit={false}
      text={"Eat"}
    />
    <Text style={{ fontWeight: "bold" }}>Notes</Text>
    <Text>{props.healthData ? props.healthData.notes : null}</Text>
  </Card>
);

export default DailyHealth;
