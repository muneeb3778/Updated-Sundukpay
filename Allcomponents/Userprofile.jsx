import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppContext } from './ContextApi';
import axios from 'axios';

const { width } = Dimensions.get('window');

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const { userdata } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (userdata) {
    setLoading(false);
  }
}, [userdata]);


  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#D4A852" />
      </SafeAreaView>
    );
  }

  const indexing = userdata?.fullName ? userdata.fullName[0].toUpperCase() : '';

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={{ fontSize: 18 }}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile Details</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <View style={styles.imageWrapper}>
          <View style={styles.imageContainer}>
            {userdata?.image ? (
              <Image source={{ uri: userdata.image }} style={styles.profileImage} />
            ) : (
              <Text style={styles.placeholderText}>{indexing}</Text>
            )}
          </View>
          <TouchableOpacity style={styles.editOverlayBtn}>
            <Text style={styles.editOverlayText}>✎ Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* User Info */}
      <View style={styles.infoSection}>
        <Text style={styles.userName}>{userdata?.fullName}</Text>

        <View style={styles.infoRow}>
          <View style={styles.iconBox}><Text>📞</Text></View>
          <Text style={styles.infoText}>{userdata?.phonenumber}</Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.iconBox}><Text>✉</Text></View>
          <Text style={styles.infoText}>{userdata?.email}</Text>
        </View>
      </View>

      {/* Edit Button */}
      <TouchableOpacity style={styles.bottomEditBtn}>
        <Text style={styles.bottomEditText}>Edit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
    alignItems: 'center',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  backBtn: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },
  profileCard: {
    backgroundColor: '#D4A852',
    borderRadius: 16,
    paddingVertical: 30,
    marginTop: 30,
    width: width * 0.9,
    alignItems: 'center',
  },
  imageWrapper: {
    position: 'relative',
    alignItems: 'center',
  },
  imageContainer: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#fff',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  editOverlayBtn: {
    position: 'absolute',
    bottom: -10,
    right: -10,
    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 10,
  },
  editOverlayText: {
    color: '#fff',
    fontSize: 12,
  },
  infoSection: {
    marginTop: 40,
    width: '90%',
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconBox: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#000',
  },
  bottomEditBtn: {
    marginTop: 'auto',
    marginBottom: 30,
    width: width * 0.9,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomEditText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});