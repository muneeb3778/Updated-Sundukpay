import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './Allcomponents/Home';
import PotBalance from './Allcomponents/PotBalance';

// Hugeicons
import {
  Home04Icon,
  Analytics02Icon,
  Payment01Icon,
  MoreHorizontalIcon
} from '@hugeicons/react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#fff',
              borderTopWidth: 0,
              elevation: 5,
              height: 60,
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
            tabBarIcon: ({ focused }) => {
              let IconComponent;

              if (route.name === 'Home') {
                IconComponent = Home04Icon;
              } else if (route.name === 'Pots') {
                IconComponent = Payment01Icon;
              } else if (route.name === 'Analytics') {
                IconComponent = Analytics02Icon;
              } else if (route.name === 'Payment') {
                IconComponent = Payment01Icon; // ✅ added this case
              } else if (route.name === 'More') {
                IconComponent = MoreHorizontalIcon;
              }

              return (
                <View style={{ alignItems: 'center', height: '100%', position: 'relative' }}>
                  {focused && (
                    <View
                      style={{
                        position: 'absolute',
                        top: 0,
                        width: 30,
                        height: 2.5,
                        backgroundColor: '#C7A348',
                        borderRadius: 1,
                      }}
                    />
                  )}
                  {IconComponent ? (
                    <IconComponent size={24} color={focused ? '#C7A348' : 'gray'} />
                  ) : null}
                </View>
              );
            },
            tabBarLabel: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '600',
                    color: focused ? '#C7A348' : 'gray',
                  }}
                >
                  {route.name}
                </Text>
              </View>
            ),
            tabBarActiveTintColor: '#ff5733',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Analytics" component={Home} />
          <Tab.Screen name="Pots" component={PotBalance} />
          <Tab.Screen name="Payment" component={Home} />
          <Tab.Screen name="More" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
