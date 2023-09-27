import {View, Text} from 'react-native';
import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import {useContext, useEffect, useState} from 'react';
import {ListContextProps} from '../context/ListContext';
import Home from '../screens/Home';
import Principal from '../screens/Principal';
import { data } from '../interfaces/Product.interface';

const Stack = createStackNavigator();


const Navigator = () => {
  const { isData} = useContext(ListContextProps)
  

  
  console.log("no hay data en nav" )

  

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}>
        
        {isData ? (
           <>
           
           <Stack.Screen name="Home" component={Home} />
          
          </>
        ) : (
          <>
            
            <Stack.Screen name="Principal" component={Principal} />
            <Stack.Screen name="Home" component={Home} />
          </>
          
        )}
      
      </Stack.Navigator>
    </>
  );
};

export default Navigator;
