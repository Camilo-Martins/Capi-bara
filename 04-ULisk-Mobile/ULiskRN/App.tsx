import { View, Text } from 'react-native'
import React from 'react'
import { ListProvider } from './src/context/ListProvider'
import Navigator from './src/navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
  <>
    <NavigationContainer>
    <ListProvider>
      <Navigator/>  
    </ListProvider>
    </NavigationContainer>
  </>
  )
}

export default App