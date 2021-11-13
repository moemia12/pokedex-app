import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function TopBar() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/pokemonlogo-new.png')}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    logo: {
        resizeMode: 'center',
        bottom: 30
    },
  })