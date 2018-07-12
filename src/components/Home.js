import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ButtonGroup } from "react-native-elements";

export default class ShelterApp extends React.Component {
  constructor() {
    super();

    const component1 = () => <Text>Current Residents</Text>;
    const component2 = () => <Text>Past Residents</Text>;

    this.state = {
      selectedIndex: null,
      buttons: [
        { element: component1, resident: true, title: "Current Residents" },
        { element: component2, resident: false, title: "Past Residents" }
      ]
    };

    this.setActiveButtonNavigate = this.setActiveButtonNavigate.bind(this);
  }

  setActiveButtonNavigate(selectedIndex) {
    this.setState({ selectedIndex });
    this.props.navigation.navigate("Residents", {
      resident: this.state.buttons[selectedIndex].resident,
      title: this.state.buttons[selectedIndex].title
    });
    console.log(this.props);
  }

  render() {
    const buttons = this.state.buttons;
    const { selectedIndex } = this.state;

    return (
      <View style={styles.container}>
        <Text>=^-^=</Text>
        <ButtonGroup
          onPress={this.setActiveButtonNavigate}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 50 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
