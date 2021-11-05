import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect  } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

export default function App() {

  const [pokemon, setPokemon] = useState([])

  //Fetching Pokemon from online database
  async function fetchPokemon() {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
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

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
