import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Import Pages
import Incidents from './Pages/Incidents';
import Detail from './Pages/Detail';


/*function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
      </View>
    );
  }*/
  
  const AppStack = createStackNavigator();

  
  function Routes() {
    return (
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{headerShown: false}}>
          <AppStack.Screen name="Incidents" component={Incidents} />
          <AppStack.Screen name="Detail" component={Detail} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;