import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieListScreen from './components/ListScreen';
import DetailsScreen from './components/DetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Fast and Furious Franchise">
        <Stack.Screen name="Fast and Furious Franchise" component={MovieListScreen} />
        <Stack.Screen name="Movie Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
