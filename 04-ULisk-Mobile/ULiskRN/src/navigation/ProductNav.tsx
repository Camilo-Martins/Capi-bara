import { View, Text } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Principal from '../screens/PrincipalScreen'
import AddItem from '../screens/AddItem'

export type ProduckStackParams ={
    productsScreen: undefined
    productScreen: {id?: number, name?: string}
}

const Stack = createStackNavigator<ProduckStackParams>();

const ProductNav = () => {
  return (
   <Stack.Navigator>
    
    <Stack.Screen
        name="productsScreen"
        component={Principal}
        options={{title: 'Lista Productos'}}
    />
    <Stack.Screen
        name='productScreen'
        component={Home}
        options={{title: 'Lista Productos'}}
    />
   </Stack.Navigator>
  )
}

export default ProductNav