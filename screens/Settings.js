import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class SettingsScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Settings Screen</Text>
            </View>
        )}
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})