import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';



export default function TopBar() {
    return (
        <View>
            <Image style={styles.logo} source={require('../assets/pokemonlogo-new.png')} />
        </View>
    )
}


const styles = StyleSheet.create({
    logo: {
        resizeMode: 'center',
        right: 85,
        height: 110,
        backgroundColor: '#101010',
    },
    back: {
        width:  100,
        height: 111,
        position: 'absolute',
        top: 45,
        left: 30,
        zIndex: 2,
        

    }
})