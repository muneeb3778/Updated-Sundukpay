import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './Allcomponents/Home';
import { HugeiconsIcon } from '@hugeicons/react-native';
import Addpot from './Allcomponents/Addpot';
import PotsDetails from './Allcomponents/PotsDetails';
import Pot from './Allcomponents/Pot';

// Import free icons
import {
  HomeIcon,
  Analytics01Icon,
  ArrowReloadHorizontalIcon,
  MoreHorizontalIcon,
  MoneyBag01Icon
} from '@hugeicons/core-free-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const PotsStackNav = createNativeStackNavigator();

function App() {
  
function PotsStack() {
  return (
    <PotsStackNav.Navigator screenOptions={{ headerShown: false }}>
      <PotsStackNav.Screen name="PotsMain" component={Pot} />
      <PotsStackNav.Screen name="PotsDetails" component={PotsDetails} />
      <PotsStackNav.Screen name="Addpot" component={Addpot} />
    </PotsStackNav.Navigator>
  );
}


  return (

    
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName='Pots'
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

              // ✅ Assign correct icon per route
              if (route.name === 'Home') {
                IconComponent = HomeIcon;
              } else if (route.name === 'Pots') {
                IconComponent = MoneyBag01Icon;
              } else if (route.name === 'Analytics') {
                IconComponent = Analytics01Icon;
              } else if (route.name === 'Payment') {
                IconComponent =  ArrowReloadHorizontalIcon;
              } else if (route.name === 'More') {
                IconComponent = MoreHorizontalIcon;
              }

              if (!IconComponent) return null;

              return (
                <View style={{ alignItems: 'center', height: '100%', position: 'relative' }}>
                  {focused && (
                    <View
                      style={{
                        position: 'absolute',
                        top:-7,
                        width: 40,
                        height: 2.5,
                        backgroundColor: '#C7A348',
                        borderRadius: 1,
                      }}
                    />
                  )}
                  <HugeiconsIcon
                    icon={IconComponent}
                    size={24}
                    color={focused ? '#C7A348' : 'gray'}
                    strokeWidth={1.5}
                  />
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
            tabBarHideOnKeyboard:true
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Analytics" component={Home} />
          <Tab.Screen name="Pots" component={PotsStack} />
          <Tab.Screen name="Payment" component={Home} />
          <Tab.Screen name="More" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
