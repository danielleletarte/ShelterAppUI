import { Query } from "react-apollo";
import gql from "graphql-tag";
import React from "react";
import { Text, View } from 'react-native';

import  { List, ListItem }  from  'react-native-elements';


const GetResidentsList = (props) => (
    <Query
        query={gql`
            {
              getCurrentResidents(resident: ${props.resident}) {
                name
                age
                image
              }
            }
        `}
    >
        {({ loading, error, data }) => {
            if (loading) return <Text>Loading...</Text>;
            if (error) return <Text>Error :(</Text>;

            return <List containerStyle={{marginBottom: 0, marginTop: 0}}>
                {
                    data.getCurrentResidents.map(({name, age, image}) => (
                        <ListItem
                            roundAvatar
                            avatar={{uri:image}}
                            key={name}
                            title={name}
                            subtitle={age}
                        />
                    ))
                }
            </List>
        }}
    </Query>
);

export default GetResidentsList;