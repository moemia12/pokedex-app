import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function TopBar() {
    return (
        <View>
            <View>
                <AntDesign name="arrowleft" size={24} color="black" />
            </View>

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
})