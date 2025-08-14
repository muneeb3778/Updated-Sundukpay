import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image,Dimensions } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HugeiconsIcon } from '@hugeicons/react-native';
import { ArrowUp02Icon, ArrowDown02Icon, Pen01Icon,ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window')

const Pot= function () {
  
  const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* Title */}
                <Text style={styles.title}>Pots</Text>

                {/* Combined Pot Balance */}
                <View style={styles.balanceCard}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.balanceTitle}>Combined Pot Balance</Text>
                        <Image source={require('../assets/addpotimages/potimg.png')} style={{ width: 30, height: 30 }} />
                    </View>
                    <Text style={styles.balanceAmount}>AED 20,875.90</Text>
                    <Text style={styles.balanceGoal}>of AED 80,000</Text>
                    <ProgressBar progress={0.26} color="#C7A348" style={{ borderRadius: 5, height: 6, marginTop: 8 }} />
                </View>

                {/* Total Savings Pots */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Total Savings Pots</Text>
                    <Text style={styles.sectionCount}>6/20</Text>
                </View>

                <View style={styles.potsGrid}>
                    {/* Vacation Pot */}
                    <TouchableOpacity style={styles.potCard} onPress={()=>{navigation.navigate("PotsDetails")}}>
                        <View className="flex-row items-center justify-between">
                          <View className="flex-row items-center gap-[2%]">
                        <View style={styles.iconWrapper}>
                        <Image source={require('../assets/addpotimages/aeroplaneimg.png')} style={styles.potImage} />
                        </View>
                        <Text style={styles.potTitle}>Vacation</Text>
                          </View>
                          <HugeiconsIcon
                          icon={ArrowUpRight03Icon}
                          size={18}
                          color={"rgba(199, 163, 72, 0.5)"}
                          />                        
                        </View>
                        <View>
                        <View className="flex-row justify-between">
                        <Text style={styles.potAmount}><Text style={styles.potGoal}>AED</Text> 1,12,500</Text>
                        <Text style={styles.potAmount}><Text style={styles.potGoal}>of AED</Text> 1,50,000</Text>
                        </View>
                        <ProgressBar progress={0.75} color="#C7A348" style={styles.progress} />
                        <Text style={styles.progressText}>75.0% Complete</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Car Pot */}
                    <TouchableOpacity style={styles.potCard} onPress={()=>{navigation.navigate("PotsDetails")}}>
                        <View className="flex-row items-center justify-between">
                          <View className="flex-row items-center gap-[2%]">
                            <View style={styles.iconWrapper}>
                              <Image source={require('../assets/addpotimages/carimg.png')} style={styles.potImage} />
                            </View>
                        <Text style={styles.potTitle}>Car</Text>
                        </View>
                          <HugeiconsIcon
                          icon={ArrowUpRight03Icon}
                          size={18}
                          color={"rgba(199, 163, 72, 0.5)"}
                          /> 
                        </View>
                        <View className="flex-row justify-between">
                        <Text style={styles.potAmount}><Text style={styles.potGoal}>AED</Text> 5000</Text>
                        <Text style={styles.potAmount}><Text style={styles.potGoal}>of AED</Text> 50,000</Text>
                        </View>
                        <ProgressBar progress={0.10} color="#C7A348" style={styles.progress} />
                        <Text style={styles.progressText}>10.0% Complete</Text>
                    </TouchableOpacity>

                    {/* Home Pot */}
                    <TouchableOpacity style={styles.potCard} onPress={()=>{navigation.navigate("PotsDetails")}}>
                        <View className="flex-row items-center justify-between">
                          <View className="flex-row items-center gap-[2%]">
                            <View style={styles.iconWrapper}>
                          <Image source={require('../assets/addpotimages/Homeimg.png')} style={styles.potImage} />
                            </View>
                        <Text style={styles.potTitle}>Home</Text>
                          </View>
                          <HugeiconsIcon
                          icon={ArrowUpRight03Icon}
                          size={18}
                          color={"rgba(199, 163, 72, 0.5)"}
                          /> 
                        </View>
                        <View className="flex-row justify-between">
                        <Text style={styles.potAmount}><Text style={styles.potGoal}>AED</Text> 20,000</Text>
                        <Text style={styles.potAmount}><Text style={styles.potGoal}>of AED</Text> 1,00,000</Text>
                        </View>
                        <ProgressBar progress={0.20} color="#C7A348" style={styles.progress} />
                        <Text style={styles.progressText}>20.0% Complete</Text>
                    </TouchableOpacity>

                    {/* Add Pot */}
                    <TouchableOpacity style={[styles.potCard, styles.addPot]} onPress={()=>{navigation.navigate("Addpot")}}>
                        <View style={styles.iconWrapper}>
                        <Text style={styles.addPotPlus}>+</Text>
                        </View>
                        <Text style={styles.potTitle}>Add Pot</Text>
                    </TouchableOpacity>
                </View>

                {/* Pot Transactions */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Pot Transaction</Text>
                    <Text style={styles.viewAll}>View All</Text>
                </View>

                <View style={styles.transactionRow}>
                    <View  className="flex-row gap-[15%]">
                    <Image source={require('../assets/addpotimages/Homeimg.png')} style={styles.txnIcon} />
                    <View>
                        <Text style={styles.txnTitle}>Home</Text>
                        <Text style={styles.txnDate}>22 July 9:34 pm</Text>
                    </View>
                    </View>
                    <View className="flex-row">
                    <Text style={[styles.txnAmount]}><Text style={[styles.txnAmountAED]}>AED</Text> 280</Text>
                    <HugeiconsIcon
                    icon={ArrowDown02Icon}
                    size={18}
                    color={"green"}
                    />
                    </View>
                </View>

                <View style={styles.transactionRow}>
                    <View className="flex-row gap-[15%]">
                    <Image source={require('../assets/addpotimages/carimg.png')} style={styles.txnIcon} />
                    <View>
                        <Text style={styles.txnTitle}>Car</Text>
                        <Text style={styles.txnDate}>22 July 10:40 pm</Text>
                    </View>
                    </View>
                    <View className="flex-row">
                    <Text style={[styles.txnAmount,]}><Text style={[styles.txnAmountAED]}>AED</Text> 200</Text>
                    <HugeiconsIcon
                    icon={ArrowUp02Icon}
                    size={18}
                    color={"red"}
                    />
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#C7A348',
    marginBottom: 12,
  },

  balanceCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  balanceAmount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginTop: 6,
  },
  balanceGoal: {
    fontSize: 14,
    color: '#999',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  sectionCount: {
    fontSize: 14,
    color: '#999',
  },

  potsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  potCard: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 12,
    borderRadius: 12,
    elevation: 2,
    marginBottom: 12,
    gap:3,
    borderWidth: 1,
   borderColor: 'rgba(199, 163, 72, 0.5)'
  },
  potImage: {
    width: 50,
    height: 50,
    marginBottom: 6,
  },
  potTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  potAmount: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },
  potGoal: {
    fontSize: 8,
    color: '#999',
  },
  progress: {
    borderRadius: 5,
    height: 6,
    marginTop: 6,
  },
  progressText: {
    fontSize: 12,
    color: '#C7A348',
    marginTop: 4,
  },

  addPot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPotPlus: {
    fontSize: 50,
    textAlign:'center',
    color: '#C7A348',
    fontWeight: '700',
    top:-4
  },

  viewAll: {
    fontSize: 14,
    fontWeight: '600',
    color: '#C7A348',
  },

  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
iconWrapper: {
width: width / 5.5 - 11,
height: width / 5.5 - 11,
margin: 5,
alignItems: 'center',
justifyContent: 'center',
borderRadius: 50,
borderWidth: 1,
borderColor: 'rgba(199, 163, 72, 0.5)',
},
  txnIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  txnTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  txnDate: {
    fontSize: 12,
    color: '#888',
  },
  txnAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
    txnAmountAED: {
    fontSize: 9,
    fontWeight: '600',
  },
});

export default Pot


