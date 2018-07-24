import React from "react";
import { Text, View } from "react-native";
import { Card, Icon } from "react-native-elements";
import HealthSelection from "./HealthSelection";
import moment from "moment";

export default class DailyHealth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editEnabled: false,
      healthData: props.healthData
    };

    this.setEditMode = this.setEditMode.bind(this);
  }

  setEditMode() {
    this.setState({ editEnabled: !this.state.editEnabled });
  }

  render() {
    return (
      <Card>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 1, fontWeight: "bold" }}>
            {this.state.healthData
              ? moment(this.state.healthData.date).format("MMMM Do YYYY")
              : moment().format("MMMM Do YYYY")}
          </Text>
          <Icon name="edit" size={20} onPress={this.setEditMode} />
        </View>
        <HealthSelection
          task={this.state.healthData ? this.state.healthData.urinate : false}
          edit={this.state.editEnabled}
          text={"Urinate"}
        />
        <HealthSelection
          task={this.state.healthData ? this.state.healthData.poo : false}
          edit={this.state.editEnabled}
          text={"Feces"}
        />
        <HealthSelection
          task={this.state.healthData ? this.state.healthData.eat : false}
          edit={this.state.editEnabled}
          text={"Eat"}
        />
        <Text style={{ fontWeight: "bold" }}>Notes</Text>
        <Text>
          {this.state.healthData ? this.state.healthData.notes : null}
        </Text>
      </Card>
    );
  }
}
