import React from "react";
import { CheckBox } from "react-native-elements";
import { View } from "react-native";

export default class HealthSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.task
    };

    this.updateSelection = this.updateSelection.bind(this);
  }

  updateSelection() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <CheckBox
        title={this.props.text}
        iconRight
        iconType="ionicon"
        checkedIcon="ios-heart"
        uncheckedIcon="ios-heart"
        checkedColor="red"
        checked={this.props.edit ? this.state.checked : this.props.task}
        onIconPress={this.updateSelection}
        component={View}
        left
        containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
      />
    );
  }
}
