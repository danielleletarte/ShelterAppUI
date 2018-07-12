import React from "react";
import GetResidentsList from './GetResidentsList';


export default class ResidentsList extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        };
    };
    render() {
        const { navigation } = this.props;
        const resident = navigation.getParam('resident');
        return(
            <GetResidentsList resident={JSON.stringify(resident)}/>
        );
    }
}
