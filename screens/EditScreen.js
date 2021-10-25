import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenHeader from '../components/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class EditScreen extends React.Component{
    render(){
        return(
            <SafeAreaProvider>
            <View>
                <ScreenHeader title = "Edit Screen"/>
                <Text>Edit screen</Text>
            </View>
            </SafeAreaProvider>
        )}
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})