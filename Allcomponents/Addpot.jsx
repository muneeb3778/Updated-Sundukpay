import React, { useState, useRef } from 'react';
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
import { SafeAreaView } from 'react-native-safe-area-context';

// Images
import potimg from "../assets/addpotimages/potimg.png";
import carimg from '../assets/addpotimages/carimg.png';
import Homeimg from '../assets/addpotimages/Homeimg.png';
import aeroplaneimg from '../assets/addpotimages/aeroplaneimg.png';
import emergencyimg from '../assets/addpotimages/emergencyimg.png';
import hajjimg from '../assets/addpotimages/hajjimg.png';
import eduactionimg from '../assets/addpotimages/eduactionimg.png';

// Icons
import { HugeiconsIcon } from '@hugeicons/react-native';
import {
  ArrowRight02Icon,
  ArrowLeft02Icon,
  Calendar03Icon,
  MessageQuestionIcon
} from "@hugeicons/core-free-icons";

const { width } = Dimensions.get('window');

function Addpot() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(0);
  const [potName, setPotName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const scrollViewRef = useRef(null);

  const icons = [
    potimg, carimg, Homeimg, aeroplaneimg, emergencyimg, hajjimg, eduactionimg,
    carimg, emergencyimg, hajjimg, eduactionimg, carimg
  ];

  const onChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) setDate(selectedDate);
  };

  const handleCreatePot = () => {
    if (!potName.trim() || !targetAmount.trim() || !date) {
      Alert.alert('Missing Fields', 'Please fill all fields before creating a pot.');
      return;
    }
    Alert.alert('Pot Created', 'Your saving pot has been created successfully!');
  };

  const groupIcons = (iconsArr) => {
    const pages = [];
    for (let i = 0; i < iconsArr.length; i += 8) {
      pages.push(iconsArr.slice(i, i + 8));
    }
    return pages;
  };

  const pages = groupIcons(icons);

  const handleArrowPress = () => {
    const nextPage = currentPage === 0 ? 1 : 0;
    setCurrentPage(nextPage);
    scrollViewRef.current?.scrollTo({ x: width * nextPage, animated: true });
  };

  const onScrollEnd = (e) => {
    const page = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentPage(page);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <HugeiconsIcon icon={ArrowLeft02Icon} size={25} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <HugeiconsIcon icon={MessageQuestionIcon} size={22} color="rgba(193, 153, 69, 0.8)" />
          </TouchableOpacity>
        </View>

        {/* Heading */}
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
            placeholder="Enter your pot name"
            placeholderTextColor="rgba(193, 153, 69, 0.6)"
          />
        </View>

        {/* Target Amount */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Target amount</Text>
          <TextInput
            style={styles.input}
            value={targetAmount}
            onChangeText={setTargetAmount}
            placeholder="Enter your target amount"
            placeholderTextColor="rgba(193, 153, 69, 0.6)"
            keyboardType="numeric"
          />
        </View>

        {/* Target Date */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Target Date</Text>
          <Pressable onPress={() => setShowPicker(true)}>
            <View style={styles.datePicker}>
              <TextInput
                editable={false}
                style={styles.dateText}
                value={date.toLocaleDateString()}
                placeholder="Enter your target date"
                placeholderTextColor="rgba(193, 153, 69, 0.6)"
              />
              <HugeiconsIcon icon={Calendar03Icon} color="rgba(193, 153, 69, 0.8)" size={24} />
            </View>
          </Pressable>
          {showPicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        {/* Choose Icon Header */}
        <View style={styles.chooseHeader}>
          <Text style={styles.label}>Choose an Icon</Text>
          {pages.length > 1 && (
            <TouchableOpacity onPress={handleArrowPress}>
              <HugeiconsIcon
                icon={currentPage === 0 ? ArrowRight02Icon : ArrowLeft02Icon}
                size={30}
                color="rgba(193, 153, 69, 0.8)"
                strokeWidth={2.5}
              />
            </TouchableOpacity>
          )}
        </View>

        {/* Icons Display */}
        <View style={styles.iconContainer}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={onScrollEnd}
          >
            {pages.map((page, pageIndex) => (
              <View key={pageIndex} style={styles.iconPage}>
                {page.map((icon, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.iconWrapper,
                      selectedIcon === icons.indexOf(icon) && styles.selectedIconWrapper,
                    ]}
                    onPress={() => setSelectedIcon(icons.indexOf(icon))}
                  >
                    <Image source={icon} style={styles.iconImage} />
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleCreatePot}>
          <Text style={styles.buttonText}>Create a Pot</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40
  },
  header: {
    width: '110%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,

    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,

    // Android Shadow
    elevation: 3,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    width: '100%'
  },
  subHeading: {
    fontSize: 16,
    fontWeight: "500",
    color: 'rgba(108, 114, 120, 1)',
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'left',
    width: '100%',
  },
  inputGroup: { width: '100%', marginBottom: 15 },
  label: {
    fontSize: 18,
    color: '#000',
    marginBottom: 6,
    fontWeight: "600"
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 15,
  borderColor: 'rgba(193, 153, 69, 0.3)',
    height: 50,
    color: "rgba(199, 163, 72, 0.5)",
    fontSize: 18
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderColor: 'rgba(193, 153, 69, 0.3)',
    height: 50,
  },
  dateText: {
    color: 'rgba(193, 153, 69, 0.8)',
    fontSize: 14,
    flex: 1
  },
  chooseHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15
  },
  iconContainer: {
    height: (width / 4 - 20) * 2 + 20,
    marginBottom: 20,
    width: '100%'
  },
  iconPage: {
    width: width - 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: width / 4 - 25,
    height: width / 4 - 25,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedIconWrapper: {
    borderColor: 'rgba(193, 153, 69, 0.2)',
    backgroundColor: 'rgba(193, 153, 69, 0.1)'
  },
  iconImage: { width: '80%', height: '80%', resizeMode: 'contain' },
  button: {
    backgroundColor: 'rgba(193, 153, 69, 1)',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14
  }
});

export default Addpot;
