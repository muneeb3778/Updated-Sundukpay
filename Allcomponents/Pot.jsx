import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const Pot= function () {
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
                    <TouchableOpacity style={styles.potCard}>
                        <View className="flex-row items-center justify-between">
                        <Image source={require('../assets/addpotimages/aeroplaneimg.png')} style={styles.potImage} />
                        <Text style={styles.potTitle}>Vacation</Text>
                        </View>
                        <Text style={styles.potAmount}>1,12,500</Text>
                        <Text style={styles.potGoal}>of 1,50,000</Text>
                        <ProgressBar progress={0.75} color="#C7A348" style={styles.progress} />
                        <Text style={styles.progressText}>75.0% Complete</Text>
                    </TouchableOpacity>

                    {/* Car Pot */}
                    <TouchableOpacity style={styles.potCard}>
                        <View className="flex-row items-center justify-between">
                        <Image source={require('../assets/addpotimages/carimg.png')} style={styles.potImage} />
                        <Text style={styles.potTitle}>Car</Text>
                        </View>
                        <Text style={styles.potAmount}>5000</Text>
                        <Text style={styles.potGoal}>of 50,000</Text>
                        <ProgressBar progress={0.10} color="#C7A348" style={styles.progress} />
                        <Text style={styles.progressText}>10.0% Complete</Text>
                    </TouchableOpacity>

                    {/* Home Pot */}
                    <TouchableOpacity style={styles.potCard}>
                        <View className="flex-row items-center justify-between">
                        <Image source={require('../assets/addpotimages/Homeimg.png')} style={styles.potImage} />
                        <Text style={styles.potTitle}>Home</Text>
                        </View>
                        <Text style={styles.potAmount}>20,000</Text>
                        <Text style={styles.potGoal}>of 100,000</Text>
                        <ProgressBar progress={0.20} color="#C7A348" style={styles.progress} />
                        <Text style={styles.progressText}>20.0% Complete</Text>
                    </TouchableOpacity>

                    {/* Add Pot */}
                    <TouchableOpacity style={[styles.potCard, styles.addPot]}>
                        <Text style={styles.addPotPlus}>+</Text>
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
                    <Text style={[styles.txnAmount, { color: 'green' }]}>+ AED 280</Text>
                </View>

                <View style={styles.transactionRow}>
                    <View className="flex-row gap-[15%]">
                    <Image source={require('../assets/addpotimages/carimg.png')} style={styles.txnIcon} />
                    <View>
                        <Text style={styles.txnTitle}>Car</Text>
                        <Text style={styles.txnDate}>22 July 10:40 pm</Text>
                    </View>
                    </View>
                    <Text style={[styles.txnAmount, { color: 'red' }]}>- AED 200</Text>
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
  },
  potImage: {
    width: 40,
    height: 40,
    marginBottom: 6,
  },
  potTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  potAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  potGoal: {
    fontSize: 12,
    color: '#999',
  },
  progress: {
    borderRadius: 5,
    height: 6,
    marginTop: 6,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },

  addPot: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPotPlus: {
    fontSize: 32,
    color: '#C7A348',
    fontWeight: '700',
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
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Pot


