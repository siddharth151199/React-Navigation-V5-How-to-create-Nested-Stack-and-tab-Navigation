// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Stack1 from './screens/Stack1';
// import Stack2 from './screens/Stack2';

// const Stack = createStackNavigator();

// function StackScreens(){
//   return(
//     <Stack.Navigator screenOptions={{
//       headerTitleAlign:'center',
//       headerTintColor:'#fff',
//       headerStyle:{
//         backgroundColor:'blue'
//       }
//     }}>
//       <Stack.Screen name="Stack1" component={Stack1} />
//       <Stack.Screen name="Stack2" component={Stack2} />
//     </Stack.Navigator>
//   )
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//         <StackScreens />
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Stack1 from './screens/Stack1';
import Stack2 from './screens/Stack2';
import Settings from './screens/Settings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackScreens(){
  return(
    <Stack.Navigator screenOptions={{
      headerTitleAlign:'center',
      headerTintColor:'#fff',
      headerStyle:{
        backgroundColor:'blue'
      }
    }}>
      <Stack.Screen name="Stack1" component={Stack1} />
      <Stack.Screen name="Stack2" component={Stack2} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={32} color={color} />;
            // return <Ionicons name= size={32} color= />

          },
        })}
      >
        <Tab.Screen  name="Home" component={StackScreens} />
        <Tab.Screen  name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
