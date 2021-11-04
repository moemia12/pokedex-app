import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios'

export default function App() {

  //Fetching Pokemon from online database
  async function fetchPokemon() {
    try {
      const { data } = await axios.get('https://pokeapi.co/')
      setPokemon(data.results)
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting Pokemon', '', [{ text: 'Retry', onPress: () => fetchPokemon() }])
    }
  }

  //Hook to fetch Pokemon
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
