import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native'

const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

export default function PokemonList({navigation}) {

    const [pokemons, setPokemon] = useState([])
    //Fetching Pokemon from online database
    async function fetchPokemon() {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
        setPokemon(data.results)
      } catch (error) {
        console.log(error)
       }
    }
    //Hook to fetch Pokemon upon component mount
    useEffect(() => {
      fetchPokemon()
    }, [])
  
    //Function for FlatList - To render Pokemon images
    const renderPokemon = ({ item }) => {
      let url = item.url
      const idPokemon = url.split('https://pokeapi.co/api/v2/pokemon/')
      const link = urlImage + idPokemon[1].substring(0, idPokemon[1].length - 1) + ".png"

      const pressHandler = () =>{
            navigation.navigate('Pokemon', item)
      }
  
      return (
        //Individual images
        <TouchableOpacity onPress={pressHandler} style={styles.pokemons}>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={{ uri: link }}
          />
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
      )
    }
  
    return (
      //App container
      <NavigationContainer>
        <View style={styles.container}>
          {/**Pokemon image grid display*/}
          <FlatList
            numColumns={2}
            data={pokemons}
            renderItem={renderPokemon}
            keyExtractor={pokemon => `key-${pokemon.name}`}
            style={styles.container}
  
          >
          </FlatList>
        </View>
      </NavigationContainer>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#101010'
    },
  
    pokemons: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#181818',
      marginTop: 10,
      marginHorizontal: 5,
      padding: 2,
      borderRadius: 20
    },
    text: {
      color: 'white'
    },
    image: {
      width: 150,
      height: 150
    }
  });