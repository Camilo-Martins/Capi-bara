import { createStackNavigator} from '@react-navigation/stack';
import {useContext} from 'react';
import {ListContextProps} from '../context/ListContext';
import Home from '../screens/Home';
import Principal from '../screens/PrincipalScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  const {isData} = useContext(ListContextProps);

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
