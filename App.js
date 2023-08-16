import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';



import SearchScreen from './SearchScreen';
import MyBooks from './User';


const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Search') {
                  iconName = 'search-outline';
                }
                else if (route.name === 'Home') {
                iconName = 'home-outline';
                }
                else if (route.name === 'Profile') {
                iconName = 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            })}
        >
        <BottomTab.Screen name = "Search" component={SearchScreen} />
        <BottomTab.Screen name = "Profile" component={MyBooks} />
        </BottomTab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3c329c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
