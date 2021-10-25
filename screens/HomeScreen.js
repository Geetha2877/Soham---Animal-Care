import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ScreenHeader from '../components/Header'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <SafeAreaProvider>
          
                <ScreenHeader title = "Home Screen"/>
                <Text>Home screen</Text>
            
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