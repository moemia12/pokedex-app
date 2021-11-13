import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import TopBar from './components/TopBar';
import axios from 'axios'

const images = {
  1: require('././assets/pokemon-sprites/1.png'),
  2: require('././assets/pokemon-sprites/2.png'),
  3: require('././assets/pokemon-sprites/3.png'),
  4: require('././assets/pokemon-sprites/4.png'),
  5: require('././assets/pokemon-sprites/6.png'),
  6: require('././assets/pokemon-sprites/7.png'),
  7: require('././assets/pokemon-sprites/8.png'),
  8: require('././assets/pokemon-sprites/1.png'),
  9: require('././assets/pokemon-sprites/10.png'),
  10: require('././assets/pokemon-sprites/11.png'),
  11: require('././assets/pokemon-sprites/12.png'),
  12: require('././assets/pokemon-sprites/13.png'),
  13: require('././assets/pokemon-sprites/14.png'),
  14: require('././assets/pokemon-sprites/15.png'),
  15: require('././assets/pokemon-sprites/16.png'),
  16: require('././assets/pokemon-sprites/17.png'),
  17: require('././assets/pokemon-sprites/18.png'),
  18: require('././assets/pokemon-sprites/19.png'),
  19: require('././assets/pokemon-sprites/20.png'),
  20: require('././assets/pokemon-sprites/21.png'),
  21: require('././assets/pokemon-sprites/22.png'),
  22: require('././assets/pokemon-sprites/23.png'), 
  23: require('././assets/pokemon-sprites/24.png'),
  24: require('././assets/pokemon-sprites/25.png'),
  25: require('././assets/pokemon-sprites/25.png'),
};

export default function App() {

  const [pokemons, setPokemon] = useState([])
  //Fetching Pokemon from online database
  async function fetchPokemon() {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=25')
      setPokemon(data.results)
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting Pokemon', '', [{ text: 'Retry', onPress: () => fetchPokemon() }])
    }
  }


  //Hook to fetch Pokemon upon component mount
  useEffect(() => {
    fetchPokemon()
  }, [{ name: 'no data' }])

  return (

    <View style={styles.container}>
      {/**Project Logo */}
      <TopBar />
      {/**Pokemon container */}
      <ScrollView>
        {
          pokemons && pokemons.map((pokemon, index) =>
            <View style={styles.pokemonWrapper} key={index + '_' + pokemon.name}>
              <Image style={styles.pokemonImage} source={images[index + 1]} />
              <View style={styles.pokemonTitle}><Text>{index + 1} : {pokemon.name}</Text></View>
            </View>
          )}
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonWrapper: {
    flex: 1,
    flexDirection: 'row',
    margin: 1,
  },
  pokemonTitle: {
    color: 'white',
    backgroundColor: 'white',

  },
  pokemonImage: {

  },
});
