import React, { useContext, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Alert,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from './ContextApi';
import BackgroundGraphic from '../assets/Background.png';
import walletcircleimg from '../assets/walletcircleimg.png';
import card from '../assets/Walletimages/Card.png';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import CookieManager from '@react-native-cookies/cookies';

const { width } = Dimensions.get('window');
const BACKEND_URL = 'https://502ea5ad5cdc.ngrok-free.app/api/sunduk-service';

const Wallet = () => {
  const { isQuickLogin, setisQuickLogin, userdata, setUserData } = useContext(AppContext);
  const navigation = useNavigation();

  const googleLogin = async () => {
    const loginUrl = `${BACKEND_URL}/oauth2/authorization/google`;
    const redirectUrl = 'islamicbank://login-success';

    try {
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.openAuth(loginUrl, redirectUrl, {
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          showTitle: true,
          enableUrlBarHiding: true,
          enableDefaultShare: false,
        });

        if (result.type === 'success' && result.url) {
          handleDeepLink({ url: result.url });
        }
      } else {
        Linking.openURL(loginUrl);
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Login Failed', 'Something went wrong during Google login.');
    }
  };

  const handleDeepLink = async ({ url }) => {
    console.log('Deep Link Received:', url);

    try {
      const queryString = url.split('?')[1];
      const params = new URLSearchParams(queryString);
      const jsessionid = params.get('sessionId') || params.get('JSESSIONID');
      const email = decodeURIComponent(params.get('email') || '');
      const fullName = decodeURIComponent(params.get('fullName') || '');

      if (!jsessionid) {
        throw new Error('No session ID received');
      }
      if(email && fullName) {
        setUserData({ email, fullName });
      }

      // Set session cookie
      await CookieManager.set('https://502ea5ad5cdc.ngrok-free.app', {
        name: 'JSESSIONID',
        value: jsessionid,
        domain: '502ea5ad5cdc.ngrok-free.app',
        path: '/',
        version: '1',
        secure: true,
        httpOnly: true,
        expires: '2025-12-31T23:59:59.00Z',
      });

      console.log('Session cookie set successfully');
      navigation.navigate('Landingpage');
    } catch (error) {
      console.error('Error handling deep link:', error);
      Alert.alert('Error', 'Failed to complete login process');
    }
  };

  useEffect(() => {
    const listener = Linking.addEventListener('url', handleDeepLink);

    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink({ url });
      }
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isQuickLogin ? 'rgba(0, 0, 0, 0.1)' : '#fff' }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Image source={BackgroundGraphic} style={styles.backgroundImage} resizeMode="cover" />

        <TouchableOpacity onPress={() => setisQuickLogin(false)}>
          <Image source={walletcircleimg} style={styles.walletCircle} resizeMode="contain" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setisQuickLogin(false)}>
          <Image source={card} style={styles.cardImage} resizeMode="contain" />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.heading}>Your Digital Islamic Wallet</Text>
          <Text style={styles.subHeading}>Seamless, secure, and smart payments made easy</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={googleLogin} style={{ marginBottom: 15 }}>
            <LinearGradient
              colors={['#D4A852', '#AD7C20']}
              start={{ x: 0.2, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.linearButton}
            >
              <Text style={styles.buttonText}>Login with Google</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Loginscreen')}
            style={{ marginBottom: 15 }}
          >
            <LinearGradient
              colors={['#D4A852', '#AD7C20']}
              start={{ x: 0.2, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.linearButton}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={() => setisQuickLogin(true)} style={styles.quickLoginButton}>
            <Text style={styles.buttonText}>Quick Login</Text>
            <Text style={{ color: '#fff', marginLeft: 8, fontSize: width * 0.05 }}>{'→'}</Text>
          </TouchableOpacity>
        </View>

        {isQuickLogin && <QuickLogin />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: {
    paddingBottom: 50,
    alignItems: 'center',
  },
  backgroundImage: {
    width: width * 1.8,
    height: width * 1.8,
    position: 'absolute',
    top: 0,
    left: -width,
  },
  walletCircle: {
    position: 'absolute',
    top: -(width * 2) / 2,
    width: width * 1.95,
    height: width * 1.95,
    alignSelf: 'center',
  },
  cardImage: {
    width: width * 0.5,
    aspectRatio: 0.8,
    top: -width * 0.30,
    alignSelf: 'center',
  },
  textContainer: {
    width: width * 0.9,
    marginTop: 0,
  },
  heading: {
    fontSize: width * 0.090,
    fontWeight: '800',
    color: '#000',
  },
  subHeading: {
    fontSize: width * 0.045,
    color: '#6B7280',
    marginTop: 8,
  },
  buttonContainer: {
    width: width * 0.9,
    marginTop: 35,
  },
  linearButton: {
    height: width * 0.14,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickLoginButton: {
    backgroundColor: 'black',
    height: width * 0.14,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
});

export default Wallet;


// adb shell am start -W -a android.intent.action.VIEW -d "islamicbank://login-success?JSESSIONID=test123"
