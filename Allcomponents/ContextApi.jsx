import React, { createContext, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { MaterialIcons } from '@expo/vector-icons';


const AppContext = createContext();


const AppProvider = (props) => {

const [userdata, setUserData] = useState(null);


  return (
    <AppContext.Provider value={{}}>
      {props.children}
    </AppContext.Provider>
  );
};


const styles = StyleSheet.create({
  
});



export { AppContext, AppProvider };