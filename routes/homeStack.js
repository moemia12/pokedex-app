import{ createAppContainer } from'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import PokemonList from "../components/PokemonList";
import Pokemon from '../components/Pokemon'
import TopBar from '../shared/TopBar';
import React from 'react';

const screens = {
    Home: {
        screen: PokemonList,
        navigationOptions:{
            header: () => <TopBar/>
        }
    },
    Pokemon: {
        screen: Pokemon,
        navigationOptions:{
            header: () => <TopBar/>
        }
    }
}

const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)