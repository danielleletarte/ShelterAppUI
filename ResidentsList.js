import React from "react";
import GetResidentsList from './GetResidentsList';


export default class ResidentsList extends React.Component {
    render() {
        const { navigation } = this.props;
        const resident = navigation.getParam('resident');
        return(
            <GetResidentsList resident={JSON.stringify(resident)}/>
        );
    }
}
