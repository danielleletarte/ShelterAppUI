import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import { Text, View } from 'react-native';

const GetResidentsList = (props) => (
    <Query
        query={gql`
            {
              getCurrentResidents(resident: ${props.resident}) {
                name
                age
              }
            }
        `}
    >
        {({ loading, error, data }) => {
            if (loading) return <Text>Loading...</Text>;
            if (error) return <Text>Error :(</Text>;

            return data.getCurrentResidents.map(({ name, age }) => (
                <View key={name}>
                    <Text>{`${name}: ${age}`}</Text>
                </View>
            ));
        }}
    </Query>
);

export default GetResidentsList;