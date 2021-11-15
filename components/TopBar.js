import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function TopBar() {
    return (
        <View>
            <Image style={styles.logo} source={require('../assets/pokemonlogo-new.png')}/>
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
  })