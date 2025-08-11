import React, { useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GoHomeFill } from 'react-icons/go';
import { PiQrCodeLight } from 'react-icons/pi';
import { MdHistory } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavigation } from '@react-navigation/native';
import BackgroundGraphic from '../assets/Background.png';
import SundukPay from '../assets/Homeimages/sundukpay.png';
import HomeCard from '../assets/Homeimages/Homecard.png';

const { width, height } = Dimensions.get('window');

const HomePage = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Wallet');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View className="flex-1 bg-white relative">
      {/* Background Image */}
    <Image
  source={BackgroundGraphic}
  className="absolute top-0"
  style={{
    width: width * 1.4,
    height: height * 0.6, // adjust for desired height
    left: -325,
    overflow:"hidden"
  }}
  // resizeMode="contain"
/>


      {/* ✅ SundukPay Logo in Center */}
      <View className="flex-1">
        <Image
          source={SundukPay}
          style={{
            position:"absolute",
            top:"20%",
            width: width * 0.95,
            height: height * 0.40,
            maxWidth: 250,
            maxHeight: 200,
             right: (width * 0.2 ),

          }}
          resizeMode="contain"
        />
      </View>

      {/* ✅ Home Card at Bottom */}
      <View className="absolute bottom-10 w-full flex items-center">
        <Image
          source={HomeCard}
          style={{
            width: width * 0.9,
            height: height * 0.4,
            maxWidth: 400,
            maxHeight: 450,
          right: -(width * 0.13),

          }}
          resizeMode="contain"
        />
      </View>

      {/* ✅ Bottom Navigation Bar with Gradient */}
      {/* <LinearGradient
        colors={['#c7962b', '#b6801c']}
        className="absolute bottom-4 flex-row justify-around items-center rounded-xl w-[90%] h-14 self-center"
      >
        <TouchableOpacity className="items-center">
          <GoHomeFill size={24} color="#fff" />
          <Text className="text-xs text-white mt-1">Home</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <PiQrCodeLight size={24} color="#fff" />
          <Text className="text-xs text-white mt-1">Scan</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <MdHistory size={24} color="#fff" />
          <Text className="text-xs text-white mt-1">History</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <AiOutlineUser size={24} color="#fff" />
          <Text className="text-xs text-white mt-1">Profile</Text>
        </TouchableOpacity>
      </LinearGradient> */}
    </View>
  );
};

export default HomePage;
