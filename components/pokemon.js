import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, Animated } from 'react-native'
import axios from 'axios'



export default function Pokemon({ navigation }) {
    //Initialise state for pokemon
    const [pokemon, setPokemon] = useState()
    const [statAnimation, setStatAnimation] = useState([0])

    //Pokemon info from previous page
    const name = navigation.getParam('name');
    //Async func to retrieve pokemon
    async function fetchPokemon(name) {
        try {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
            setPokemon(data);
        } catch (error) {

            throw error
        }
    }
    //Fetch pokemon upon mount
    useEffect(() => {
        fetchPokemon(name)
    }, [])

    // '?' is to set the data when the pokemon loads
    const pokemonType = pokemon?.types[0].type.name
    const pokemonExp = pokemon?.base_experience 
    const pokemonHp = pokemon?.stats[0].base_stat * 2
    const pokemonAttack = pokemon?.stats[1].base_stat * 2
    const pokemonDefence = pokemon?.stats[2].base_stat * 2
    const pokemonSpeed = pokemon?.stats[5].base_stat * 2

    console.log(pokemonType)
    console.log(pokemonExp)



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

    const animationStat = () =>{
        Animated.timing(setStatAnimation, {
            toValue: pokemonExp,
            duration: 1500
        }).start()
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
                <Text style={styles.pokemonName}> {name.toUpperCase()} </Text>

                {/* Pokemon Type */}
                <View style={getPokemonTypeStyle(pokemonType)}>
                    <Text style={styles.pokemonTypeText}>{pokemonType.toUpperCase()}</Text>
                </View>

                <Text>{pokemon.base_experience}</Text>

                {/* Measurements stats */}
                <View style={styles.measurementContainer}>
                    <View>
                        <Text style={styles.measurements}>{pokemon.weight} KG</Text>
                        <Text style={styles.measurementChild}>WEIGHT</Text>
                    </View>
                    <View>
                        <Text style={styles.measurements}>{pokemon.height} M</Text>
                        <Text style={styles.measurementChild}>HEIGHT</Text>
                    </View>
                </View>
                {/* Base stats */}
                <View style={styles.basestats}>
                    <Text style={styles.pokemonTypeText}>BASE STATS</Text>
                    {/** Exp */}
                    <View style={styles.baseStatsContainer}>
                        <Text style={styles.pokemonStatText}>EXP</Text>
                        <View style={styles.statsContainer}>
                            <View style={[styles.exp, {width: pokemonExp}]}>
                                <Text style={styles.pokemonStatText}>{pokemonExp}</Text>
                                <Text style={styles.pokemonTopStat}>300</Text>
                            </View>
                        </View>
                    </View>
                    {/** HP */}
                    <View style={styles.baseStatsContainer}>
                        <Text style={styles.pokemonStatText}>HPS</Text>
                        <View style={styles.statsContainer}>
                            <View style={[styles.hp, {width: pokemonHp}]}>
                                <Text style={styles.pokemonStatText}>{pokemonHp}</Text>
                                <Text style={styles.pokemonTopStat}>300</Text>
                            </View>
                        </View>
                    </View>
                    {/** Attack */}
                    <View style={styles.baseStatsContainer}>
                        <Text style={styles.pokemonStatText}>ATK</Text>
                        <View style={styles.statsContainer}>
                            <View style={[styles.attack, {width: pokemonAttack}]}>
                                <Text style={styles.pokemonStatText}>{pokemonAttack}</Text>
                                <Text style={styles.pokemonTopStat}>300</Text>
                            </View>
                        </View>
                    </View>
                    {/** Defence */}
                    <View style={styles.baseStatsContainer}>
                        <Text style={styles.pokemonStatText}>DEF</Text>
                        <View style={styles.statsContainer}>
                            <View style={[styles.defence, {width: pokemonDefence}]}>
                                <Text style={styles.pokemonStatText}>{pokemonDefence}</Text>
                                <Text style={styles.pokemonTopStat}>300</Text>
                            </View>
                        </View>
                    </View>
                    {/** Speed */}
                    <View style={styles.baseStatsContainer}>
                        <Text style={styles.pokemonStatText}>SPD</Text>
                        <View style={styles.statsContainer}>
                            <View style={[styles.speed, {width: pokemonSpeed}]}>
                                <Text style={styles.pokemonStatText}>{pokemonSpeed}</Text>
                                <Text style={styles.pokemonTopStat}>300</Text>
                            </View>
                        </View>
                    </View>

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
        justifyContent: 'center',
        bottom: 30
    },
    measurementChild: {
        color: 'white',
        margin: 2,
        top: 30,
        paddingHorizontal: 20,
        fontSize: 10,
        textAlign: 'center'

    },
    measurements: {
        color: 'white',
        margin: 2,
        top: 30,
        paddingHorizontal: 20,
        fontSize: 20,
        textAlign: 'center'
    },

    basestats: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
        },
    baseStatsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      
    },
    statsContainer: {
        width: 300,
        height: 25,
        margin: 7,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    hp: {
        height: 25,
        backgroundColor: '#FFBF00',
        borderRadius: 30,
    },
    attack: {
        height: 25,
        backgroundColor: '#FF3131',
        borderRadius: 30,
    },
    defence: {
        height: 25,
        backgroundColor: '#0096FF',
        borderRadius: 30,
    },
    exp: {
        height: 25,
        backgroundColor: '#228B22',
        borderRadius: 30,
    },
    speed: {
        height: 25,
        backgroundColor: '#9F2B68',
        borderRadius: 30,
    },

    pokemonTypeText: {
        textAlign: 'center',
        lineHeight: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    pokemonStatText: {
        textAlign: 'center',
        lineHeight: 25,
        fontWeight: 'bold',
        color: 'white',
        marginRight: 10,
        marginLeft: 10,
    },
    pokemonTopStat:{
        color: 'black',
        bottom: 20,
        fontWeight: 'bold',
        left: 250
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
    }

});
