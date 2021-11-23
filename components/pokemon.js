import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native'
import axios from 'axios'



export default function Pokemon({ navigation }) {

    const [pokemon, setPokemon] = useState()

    const name = navigation.getParam('name');
    async function fetchPokemon(name) {
        try {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
            setPokemon(data);
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    useEffect(() => {
        fetchPokemon(name)
    }, [])

    return (
        <View style={styles.container}>{pokemon &&
            <View >
                <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{ uri: pokemon?.sprites?.front_default }}
                />
                <Text style={styles.pokemonName}> {name} </Text>

                <Text>{pokemon.base_experience}</Text>

                {/* Measurements stats */}
                <View style={styles.measurementContainer}>
                    <Text style={styles.measurements}>{pokemon.weight} KG</Text>
                    <Text style={styles.measurements}>{pokemon.height} M</Text>
                </View>
                {/* Measurements stats */}
                <View>
                    
                </View>

            </View>
        }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101010'
    },
    pokemonName:{
        color: 'white',
        fontSize: 40,
        textAlign: 'center'
    },
    measurementContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    measurements:{
        color: 'white',
        margin: 40,
        fontSize: 20,
        
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
        width: '100%',
        height: 200,
        backgroundColor: '#181818',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        
    }
});
