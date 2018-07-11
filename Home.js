import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ShelterApp extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>=^-^=</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Residents', {
                        resident: true
                    })}
                    title="Current Residents"
                    color="#841584"
                />
                <Button
                    onPress={() => this.props.navigation.navigate('Residents', {
                        resident: false
                    })}
                    title="Past Residents"
                    color="#841584"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});