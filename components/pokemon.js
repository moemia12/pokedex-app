import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native'
import axios from 'axios'



export default function Pokemon({ navigation }) {
    //Initialise state for pokemon
    const [pokemon, setPokemon] = useState()

    //Pokemon info from previous page
    const name = navigation.getParam('name');
    //Async func to retrieve pokemon
    async function fetchPokemon(name) {
        try {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
            setPokemon(data);
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    //Fetch pokemon upon mount
    useEffect(() => {
        fetchPokemon(name)
    }, [])

    // '?' is to set the data when the pokemon loads
    const pokemonType = pokemon?.types[0].type.name



    // //Function to change pokemonType container color
    const getPokemonTypeStyle = (pokemonType) => {
        switch (pokemonType) {
           case 'grass':
             return styles.grass
           case 'fire':
             return styles.fire
           case 'water':
             return styles.water
           case 'bug':
             return styles.bug
           case 'ghost':
             return styles.ghost
           case 'rock':
             return styles.rock
           case 'steel':
             return styles.steel
           case 'electric':
             return styles.electric
           default:
             return styles.pokemonTypeDefault 
       }
    }

    return (
        //Render pokemon if pokemon available
        <View style={styles.container}>{pokemon &&
            <View >
                <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{ uri: pokemon?.sprites?.front_default }}
                />
                <Text style={styles.pokemonName}> {name} </Text>

                {/* Pokemon Type */}
                <View style={getPokemonTypeStyle(pokemonType)}>
                    <Text style={styles.pokemonTypeText}>{pokemonType.toUpperCase()}</Text>
                </View>

                <Text>{pokemon.base_experience}</Text>

                {/* Measurements stats */}
                <View style={styles.measurementContainer}>
                    <Text style={styles.measurements}>{pokemon.weight} KG</Text>
                    <Text style={styles.measurements}>{pokemon.height} M</Text>
                </View>
                {/* Base stats */}
                <View style={styles.basestats}>
                    <Text style={styles.pokemonTypeText}>Base Stats</Text>

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
    pokemonName: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center'
    },
    measurementContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    measurements: {
        color: 'white',
        margin: 40,
        fontSize: 20,
    },
    grass: {
        backgroundColor: '#00FF00',
        width: 250,
        height: 30,
        marginTop: 10,
        marginLeft: 80,
        borderRadius: 50,
    },
    fire: {
        backgroundColor: '#FFA500',
        width: 250,
        height: 30,
        marginTop: 10,
        marginLeft: 80,
        borderRadius: 50,
    },
    water: {
        backgroundColor: '#00FFFF',
        width: 250,
        height: 30,
        marginTop: 10,
        marginLeft: 80,
        borderRadius: 50,
    },
    bug: {
        backgroundColor: '#964B00',
        width: 250,
        height: 30,
        marginTop: 10,
        marginLeft: 80,
        borderRadius: 50,
    },
    ghost: {
        backgroundColor: '#800080',
        width: 250,
        height: 30,
        marginTop: 10,
        marginLeft: 80,
        borderRadius: 50,
    },
    rock: {
        backgroundColor: '#808080',
        width: 250,
        height: 30,
        marginTop: 10,
        marginLeft: 80,
        borderRadius: 50,
    },
    steel: {
        backgroundColor: '#D3D3D3',
        width: 250,
        height: 30,
        marginTop: 10,
        marginLeft: 80,
        borderRadius: 50,
    },
    electric: {
        backgroundColor: '#6699CC',
        width: 250,
        height: 30,
        marginTop: 10,
        marginLeft: 80,
        borderRadius: 50,
    },


    pokemonTypeDefault: {
        width: 250,
        height: 30,
        marginTop: 10,
        marginLeft: 80,
        borderRadius: 50,
        backgroundColor: 'blue',
    },
    pokemonTypeText: {
        textAlign: 'center',
        lineHeight: 30,
        fontWeight: 'bold',
        color: 'white'
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
