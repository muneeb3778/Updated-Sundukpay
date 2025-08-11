import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const { width, height } = Dimensions.get('window');

const UaePassModal = ({ visible, onClose }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalBackdrop}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.modalContainer}>
              {/* Handle bar */}
              <View style={styles.handleBar} />

              {/* UAE PASS Logo */}
              <View style={styles.logoWrapper}>
                <Image
                  source={require('../../assets/Loginimages/Uaepass.png')}
                  style={styles.uaeLogo}
                  resizeMode="contain"
                />
              </View>

              {/* Input */}
              <TextInput
                style={styles.input}
                placeholder="Emirates ID, Email or Phone"
                placeholderTextColor="#999"
                value={inputValue}
                onChangeText={setInputValue}
              />

              {/* Remember Me */}
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={rememberMe}
                  onValueChange={setRememberMe}
                  tintColors={{ true: '#000', false: '#999' }}
                />
                <Text style={styles.checkboxLabel}>Remember Me</Text>
              </View>

              {/* Login Button */}
              <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Log In</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default UaePassModal;

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#FBF6EE',
    borderTopLeftRadius: width * 0.06,
    borderTopRightRadius: width * 0.06,
    paddingHorizontal: width * 0.06,
    paddingTop: height * 0.025,
    paddingBottom: height * 0.04,
    alignItems: 'center',
  },
  handleBar: {
    width: width * 0.2,
    height: height * 0.008,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: height * 0.025,
  },
  logoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.025,
  },
  uaeLogo: {
    width: width * 0.75,
    height: height * 0.09,
  },
  input: {
    width: '100%',
    height: height * 0.065,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: width * 0.04,
    fontSize: width * 0.04,
    marginBottom: height * 0.025,
    color: '#000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: height * 0.025,
  },
  checkboxLabel: {
    marginLeft: width * 0.02,
    fontSize: width * 0.036,
    color: '#333',
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: height * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight:'600',
 },
});