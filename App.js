import React, { useState, useEffect } from 'react';
import TopBar from './shared/TopBar';
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './routes/homeStack'


export default function App() {
  return (
    //App container
      <Navigator />
  );
}


