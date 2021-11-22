import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';


export default function TopBarBackButton({navigation}) {

    const pressHandler = () => {
        navigation.goBack()
    }

    return (
        <View>
            <AntDesign style={styles.back} name="left" size={24} color="white" onPress={pressHandler}/>
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
    back: {
        width:  100,
        height: 111,
        position: 'absolute',
        top: 45,
        left: 30,
        zIndex: 2,
        

    }
  })