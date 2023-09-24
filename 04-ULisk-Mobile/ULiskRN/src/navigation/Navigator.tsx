import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import { useContext, useEffect, useState } from 'react';
import { ListContextProps } from '../context/ListContext';
import Home from '../screens/Home';
import Principal from '../screens/Principal';


const Stack = createStackNavigator()

const Navigator = () => {

    const [isData, setIsData] = useState<boolean>(false)
    const {products} = useContext(ListContextProps)
    
    useEffect(() =>{
        if(products?.length > 0) setIsData(true)
    },[products])

    

  return (
 <>
   <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: 'white',
      },
    }}
   >
    {isData ?
    <Stack.Screen name='Home' component={Home}/>    
: 
<Stack.Screen name='Principal' component={Principal}/>}
   </Stack.Navigator>
 </>
  )
}

export default Navigator

