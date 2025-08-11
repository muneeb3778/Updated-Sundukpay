import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import UAEPassModal from './UaePassModal';

// IMAGES
import Flag from '../../assets/Loginimages/flag.png';
const BackgroundGraphic = require('../../assets/Background.png');
const Fingerprint = require('../../assets/Loginimages/fingerprint.png');

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* Background Graphic */}
        <Image source={BackgroundGraphic} style={styles.backgroundImage} />

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>Log In to SundukPay</Text>
          <Text style={styles.subtext}>
            Please Enter your Phone Number to Log In.
          </Text>
        </View>

        {/* Phone Input */}
        <View style={styles.phoneInputContainer}>
          <Image source={Flag} style={styles.flagIcon} />
          <Text style={styles.countryCode}>+971</Text>
          <TextInput
            placeholder="12 345 6789"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            style={styles.textInput}
          />
        </View>

        {/* UAE PASS Login */}
        <LinearGradient
          colors={['#D4A852', '#AD7C20']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.uaePassButton}
        >
          <TouchableOpacity
            style={styles.uaePassButtonInner}
            onPress={() => setModalVisible(true)}
            activeOpacity={0.8}
          >
            <Image source={Fingerprint} style={styles.uaePassImage} />
            <Text style={styles.uaePassText}>Log In with UAE PASS</Text>
          </TouchableOpacity>
          <UAEPassModal visible={modalVisible} onClose={() => setModalVisible(false)} />
        </LinearGradient>

        {/* Sign Up Text */}
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height * 0.04,
    paddingHorizontal: width * 0.05,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    width: width * 1.5,
    height: height * 0.7,
    top: 0,
    left: -width * 0.8,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: height * 0.03,
  },
  heading: {
    fontSize: width * 0.10,
    fontWeight: 'bold',
    color: '#000',
  },
  subtext: {
    fontSize: width * 0.036,
    color: '#6A6A6A',
    marginTop: 6,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    width: '100%',
    marginBottom: height * 0.03,
  },
  flagIcon: {
    width: width * 0.07,
    height: height * 0.03,
    borderRadius: 5,
    marginRight: width * 0.02,
  },
  countryCode: {
    fontSize: width * 0.04,
    color: '#000',
    marginRight: width * 0.02,
  },
  textInput: {
    flex: 1,
    fontSize: width * 0.04,
    color: '#000',
  },
  uaePassButton: {
    width: '100%',
    borderRadius: 12,
    marginBottom: height * 0.025,
  },
  uaePassButtonInner: {
    paddingVertical: height * 0.017,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uaePassImage: {
    width: width * 0.05,
    height: width * 0.05,
    marginRight: width * 0.025,
  },
  uaePassText: {
    fontSize: width * 0.04,
    color: '#fff',
    fontWeight: '600',
  },
  signupText: {
    fontSize: width * 0.036,
    color: '#000',
    marginBottom: height * 0.03,
  },
  signupLink: {
    color: '#d6a200',
    fontWeight: '600',
  },
  nextButton: {
    width: '100%',
    top: 300,
    backgroundColor: '#000',
    paddingVertical: height * 0.018,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextText: {
    fontSize: width * 0.04,
    fontWeight: '600',
    color: '#fff',
},
});
