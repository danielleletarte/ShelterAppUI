import React from "react";
import { Text, View } from "react-native";
import { Card, Icon, FormInput, Button } from "react-native-elements";
import HealthSelection from "./HealthSelection";
import moment from "moment";

export default class DailyHealth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editEnabled: false,
      healthData: props.healthData
        ? props.healthData
        : {
            notes: null,
            eat: false,
            urinate: false,
            date: moment().format("YYYYMMDD"),
            poo: false
          }
    };

    this.setEditMode = this.setEditMode.bind(this);
    this.updateSelection = this.updateSelection.bind(this);
  }

  setEditMode() {
    this.setState({ editEnabled: !this.state.editEnabled });
  }

  updateNotes(notes) {
    let healthData = { ...this.state.healthData };
    console.log("healthData");
    console.log(healthData);
    healthData.notes = notes;
    this.setState({ healthData });
  }

  updateSelection(taskName) {
    let healthData = { ...this.state.healthData };
    console.log("healthData");
    console.log(healthData);
    healthData[taskName] = !healthData[taskName];
    this.setState({ healthData });
  }

  displayEditableNotesField() {
    if (this.state.editEnabled === false) {
      return (
        <Text>
          {this.state.healthData ? this.state.healthData.notes : null}
        </Text>
      );
    } else {
      return (
        <View>
          <FormInput
            onChangeText={notes => this.updateNotes(notes)}
            value={this.state.healthData.notes}
          />
          <Button
            small
            style={{ marginTop: 10 }}
            title="Save"
            onPress={() => console.log(this.state)}
          />
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ flex: 1, fontWeight: "bold" }}>
              {moment(this.state.healthData.date).format("MMMM Do YYYY")}
            </Text>
            <Icon name="edit" size={20} onPress={this.setEditMode} />
          </View>
          <HealthSelection
            taskName={"urinate"}
            task={this.state.healthData.urinate}
            edit={this.state.editEnabled}
            text={"Urinate"}
            updateSelection={this.updateSelection}
          />
          <HealthSelection
            taskName={"poo"}
            task={this.state.healthData.poo}
            edit={this.state.editEnabled}
            text={"Feces"}
            updateSelection={this.updateSelection}
          />
          <HealthSelection
            taskName={"eat"}
            task={this.state.healthData.eat}
            edit={this.state.editEnabled}
            text={"Eat"}
            updateSelection={this.updateSelection}
          />
          <Text style={{ fontWeight: "bold" }}>Notes</Text>
          {this.displayEditableNotesField()}
        </Card>
      </View>
    );
  }
}
