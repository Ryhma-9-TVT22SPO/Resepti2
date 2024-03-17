import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';


const Tab = createBottomTabNavigator();

// Kaksi eri näkymää kovakoodattuna testiksi

const Screen1 = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Näyttö 1</Text>
    </View>
  );
  
  const Screen2 = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Näyttö 2</Text>
    </View>
  );
  
  // Tehdään bottom navigation componentti
  
  const BottomNavigation = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Screen1') {
                iconName = focused ? 'search' : 'search-outline'; 
              } else if (route.name === 'Screen2') {
                iconName = focused ? 'book' : 'book-outline'; 
              }
  
              
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#ffde59',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                height: 70, 
                backgroundColor: '#313638',
                paddingTop: 10,
                paddingBottom: 10,
                flexDirection: 'row',
            },
          })}
          
        >
          <Tab.Screen name="Screen1" component={Screen1} />
          <Tab.Screen name="Screen2" component={Screen2} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
  export default BottomNavigation;

  const styles = StyleSheet.create({
    container: {
        paddingBottom: 10
    }
});