import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native';
import TopBar from './components/TopBar';
import axios from 'axios'

const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

export default function App() {

  const [pokemons, setPokemon] = useState([])
  //Fetching Pokemon from online database
  async function fetchPokemon() {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
      setPokemon(data.results)
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting Pokemon', '', [{ text: 'Retry', onPress: () => fetchPokemon() }])
    }
  }
  //Hook to fetch Pokemon upon component mount
  useEffect(() => {
    fetchPokemon()
  }, [])

  const renderPokemon = ({ item, index }) => {
    let url = item.url
    const idPokemon = url.split('https://pokeapi.co/api/v2/pokemon/')
    const link = urlImage + idPokemon[1].substring(0, idPokemon[1].length-1) + ".png"
    console.log('link', link)
    return (
      <View style={styles.pokemons}>
        <Image 
        style={styles.image} 
        resizeMode='contain' 
        source={{uri:link}}
        />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    )
  }

  return (



    <View style={styles.topBar}>
      <TopBar style={styles.container}/>
      <FlatList
        numColumns={2}
        data={pokemons}
        renderItem={renderPokemon}
        keyExtractor={item => `key-${item.name}`}
        style={styles.container}
      >


      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010'
  },
  topBar: {
  flex: 1,
  height: 10
  
  },
  pokemons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
    marginTop: 10,
    marginHorizontal: 5,
    padding: 2
  },
  text: {
    color: 'white'
  },
  image: {
    width: 150,
    height: 150
  }
});
