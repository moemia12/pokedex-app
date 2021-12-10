import{ createAppContainer } from'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import Pokemon from '../components/pokemon'
import PokemonList from '../components/PokemonList';
import TopBar from '../shared/TopBar';
import TopBarBackButton from '../shared/TopBarBackButton';
import React from 'react';

const screens = {
    Home: {
        screen: PokemonList,
        navigationOptions:{
            header: TopBar
        }
    },
    Pokemon: {
        screen: Pokemon,
        navigationOptions:{
            header: TopBarBackButton
        }
    }
}

const HomeStack = createStackNavigator(screens)
export default createAppContainer(HomeStack)