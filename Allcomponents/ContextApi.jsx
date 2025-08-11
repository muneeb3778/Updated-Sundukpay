import React, { createContext, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { MaterialIcons } from '@expo/vector-icons';

import LineDivider from '../assets/Loginimages/blackline.jpg';
import VectorIcon from '../assets/Fingerprint/fingerprint1.png';
import FaceIcon from '../assets/Walletimages/face.png';
import PasscodeIcon from '../assets/Walletimages/passcode.png';

const AppContext = createContext();


const AppProvider = (props) => {
    
const [isQuickLogin , setisQuickLogin]=useState(false)
const [userdata, setUserData] = useState(null);


const QuickLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={()=>{setisQuickLogin(false)}}>
        <Image source={LineDivider} style={styles.lineDivider} />
      </TouchableOpacity>

      <View style={styles.quiklogin}>
      <Text style={styles.title}>Quick Login</Text>
      <Text style={[styles.description, {width:360}]}>Quick Login Using Face ID, Fingerprint and Passcode.</Text>
      </View>

<View style={styles.box}>
      {/* Fingerprint Option */}
      <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('Fingerprint')}>
        <Image source={VectorIcon} style={styles.icon} />
        <View style={styles.textWrapper}>
          <Text style={styles.optionTitle}>Fingerprint</Text>
          <Text style={styles.optionSubtext}>Quick Login using Fingerprint</Text>
        </View>
        {/* <MaterialIcons name="navigate-next" size={24} style={styles.nextIcon} /> */}
      </TouchableOpacity>

      {/* Face ID Option */}
      <TouchableOpacity style={[styles.optionContainer]} onPress={() => navigation.navigate('FaceLogin')}>
        <Image source={FaceIcon} style={styles.icon} />
        <View style={styles.textWrapper}>
          <Text style={styles.optionTitle}>Face ID</Text>
          <Text style={styles.optionSubtext}>Quick Login using Face ID</Text>
        </View>
        {/* <MaterialIcons name="navigate-next" size={24} style={styles.nextIcon} /> */}
      </TouchableOpacity>

      {/* Passcode Option */}
      <TouchableOpacity style={[styles.optionContainer]} onPress={() => navigation.navigate('Pincode')}>
        <Image source={PasscodeIcon} style={styles.icon} />
        <View style={styles.textWrapper}>
          <Text style={styles.optionTitle}>Passcode</Text>
          <Text style={styles.optionSubtext}>Quick Login using Passcode</Text>
        </View>
        {/* <MaterialIcons name="navigate-next" size={24} style={styles.nextIcon} /> */}
      </TouchableOpacity>
</View>
    </View>
  );
};

  return (
    <AppContext.Provider value={{QuickLogin,isQuickLogin ,setisQuickLogin,userdata, setUserData}}>
      {props.children}
    </AppContext.Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 450,
    width:'100%',
    height:500,
    backgroundColor: '#FBF6EE',
    borderRadius: 12,
  },
  closeButton: {
    position: 'absolute',
    top: 8,
    left:"30%",
    zIndex: 1,
  },
  lineDivider: {
    width: 140,
    height: 8,
    resizeMode: 'contain',
    borderRadius:20
  },
 quiklogin:{
    position: 'absolute',
    top: 15 ,
    left: 24,
 }, 
  title: {
    marginTop:20,
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom:10,
    color:'black'
  },
  description: {
    fontSize: 20,
    color: '#6A6A6A',
  },
  optionContainer: {
    width: "88%",
    height: 70,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    borderRadius: 8,
  },
 box:{
 position: 'absolute',
 height:400,
 width: "100%",
 justifyContent:"center",
 alignItems:"center",
 top: 140,
 gap:20
 },
  icon: {
    width: 22,
    height: 24,
    resizeMode: 'contain',
  },
  textWrapper: {
    marginLeft: 12,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: '500',
    color:'black'
  },
  optionSubtext: {
    fontSize: 15,
    color: '#6A6A6A',
    marginTop: 2,
  },
  nextIcon: {
    position: 'absolute',
    right: 10,
    top: 14,
    color: '#000',
  },
});



export { AppContext, AppProvider };