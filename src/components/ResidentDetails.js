import React from "react";
import GetResidentDetails from "./GetResidentDetails";

export default class ResidentDetails extends React.Component {
  render() {
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    return <GetResidentDetails id={JSON.stringify(id)} />;
  }
}
