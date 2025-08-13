import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  Pressable,
  Platform,
  ScrollView,
  Dimensions,
  StyleSheet,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import potimg from '../assets/addpotimages/potimg.png';
import carimg from '../assets/addpotimages/carimg.png';
import Homeimg from '../assets/addpotimages/Homeimg.png';
import aeroplaneimg from '../assets/addpotimages/aeroplaneimg.png';
import emergencyimg from '../assets/addpotimages/emergencyimg.png';
import hajjimg from '../assets/addpotimages/hajjimg.png';
import eduactionimg from '../assets/addpotimages/eduactionimg.png';

const { width } = Dimensions.get('window');

function Addpot() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(0); // default potimg
  const [potName, setPotName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');

  const onChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const icons = [
    potimg,
    carimg,
    Homeimg,
    aeroplaneimg,
    emergencyimg,
    hajjimg,
    eduactionimg,
  ];

  const handleCreatePot = () => {
    if (!potName.trim() || !targetAmount.trim() || !date) {
      Alert.alert('Missing Fields', 'Please fill all fields before creating a pot.');
      return;
    }

    const potData = {
      potName,
      targetAmount,
      targetDate: date.toISOString(),
      selectedIcon: icons[selectedIcon], // icon ka source
    };

    console.log('Created Pot Data:', potData);
    Alert.alert('Pot Created', 'Your saving pot has been created successfully!');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
      <Text style={styles.heading}>Create Your Saving Pot</Text>
      <Text style={styles.subHeading}>
        Enter pot name, duration, amount, and icon to start saving.
      </Text>

      {/* Pot Name */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Pot name</Text>
        <TextInput
          style={styles.input}
          value={potName}
          onChangeText={setPotName}
          placeholderTextColor="rgba(193, 153, 69, 1)"
          placeholder="Enter your pot name"
        />
      </View>

      {/* Target Amount */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Target amount</Text>
        <TextInput
          style={styles.input}
          value={targetAmount}
          onChangeText={setTargetAmount}
          placeholderTextColor="rgba(193, 153, 69, 1)"
          placeholder="Enter your target amount"
          keyboardType="numeric"
        />
      </View>

      {/* Target Date */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Target Date</Text>
        <Pressable onPress={() => setShowPicker(true)}>
          <TextInput
            editable={false}
            value={date.toLocaleDateString()}
            style={[styles.input, { color: 'rgba(193, 153, 69, 1)' }]}
            placeholderTextColor="rgba(193, 153, 69, 1)"
            placeholder="Enter your target date"
          />
        </Pressable>
        {showPicker && (
          <DateTimePicker value={date} mode="date" display="default" onChange={onChange} />
        )}
      </View>

      {/* Icon Selection */}
      <Text style={[styles.label, { fontWeight: 'bold', marginTop: 20 }]}>
        Choose an icon
      </Text>
      <View style={styles.iconContainer}>
        {icons.map((icon, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.iconWrapper,
              selectedIcon === index && styles.selectedIconWrapper,
            ]}
            onPress={() => setSelectedIcon(index)}
          >
            <Image source={icon} style={styles.iconImage} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleCreatePot}>
        <Text style={styles.buttonText}>Create a pot</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '5%',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 40,
  },
  subHeading: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
    marginBottom: 20,
  },
  inputGroup: {
    marginTop: 15,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 6,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderColor: 'rgba(193, 153, 69, 1)',
    height: 50,

  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    justifyContent: 'flex-start',
  },
  iconWrapper: {
    width: width / 5 - 10,
    height: width / 5 - 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedIconWrapper: {
    borderColor: 'rgba(193, 153, 69, 1)',
    backgroundColor: 'rgba(193, 153, 69, 0.1)',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  button: {
    marginTop: 30,
    backgroundColor: 'rgba(193, 153, 69, 1)',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Addpot;
