// CurrencyConverter.jsx
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import CookieManager from "@react-native-cookies/cookies";
import { AppContext } from "./ContextApi";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const { userdata } = useContext(AppContext);
  const currencies = ["USD", "EUR", "INR", "AED"];

  const handleConvert = async () => {
    console.log("=== Currency Conversion Started ===");
    console.log("Entered Amount:", amount);
    console.log("From Currency:", fromCurrency);
    console.log("To Currency:", toCurrency);

    if (!amount) {
      Alert.alert("Error", "Please enter an amount");
      return;
    }
    if (fromCurrency === toCurrency) {
      Alert.alert("Error", "Select different currencies");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      // Step 1: Get cookies
      const cookies = await CookieManager.get(
        "https://502ea5ad5cdc.ngrok-free.app"
      );
      console.log("Retrieved Cookies:", cookies);

      // Step 2: Extract session ID
      let sessionId =
        cookies?.JSESSIONID?.value || cookies?.sessionId?.value || null;

      if (!sessionId) {
        console.warn("No session ID found in cookies");
        Alert.alert("Error", "No session found. Please log in again.");
        return;
      }

      // Step 3: Clean sessionId (remove quotes if any)
      sessionId = sessionId.replace(/['"]+/g, "");
      console.log("Cleaned Session ID:", sessionId);

      // Step 4: Make request
      console.log("Sending request to backend...");
      const response = await axios.get(
        `https://502ea5ad5cdc.ngrok-free.app/api/sunduk-service/convert`,
        {
          params: {
            amount,
            fromCurrency: fromCurrency,
            toCurrency: toCurrency,
          },
          headers: {
            Cookie: `JSESSIONID=${sessionId}`,
          },
          withCredentials: true,
        }
      );

      // Step 5: Handle success
      console.log("Response Data:", response.data);
      setResult(response.data);
    } catch (error) {
      console.error(
        "Conversion Error:",
        error?.response?.data || error.message
      );
      Alert.alert("Error", "Failed to convert currency");
    } finally {
      setLoading(false);
      console.log("=== Currency Conversion Finished ===");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Currency Converter</Text>

      {/* Amount Input */}
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter amount"
        placeholderTextColor="white"
        value={amount}
        onChangeText={setAmount}
      />

      {/* From Currency */}
      <Text style={styles.label}>From</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={fromCurrency}
          onValueChange={(value) => setFromCurrency(value)}
        >
          {currencies.map((currency) => (
            <Picker.Item label={currency} value={currency} key={currency} />
          ))}
        </Picker>
      </View>

      {/* To Currency */}
      <Text style={styles.label}>To</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={toCurrency}
          onValueChange={(value) => setToCurrency(value)}
        >
          {currencies.map((currency) => (
            <Picker.Item label={currency} value={currency} key={currency} />
          ))}
        </Picker>
      </View>

      {/* Convert Button */}
      <TouchableOpacity
        style={[styles.button, loading && { opacity: 0.6 }]}
        onPress={handleConvert}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Convert</Text>
        )}
      </TouchableOpacity>

      {/* Result Box */}
      {result && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>
            {amount} {fromCurrency} = {result.convertedAmount} {toCurrency}
          </Text>
          <Text style={styles.subText}>
            Exchange Rate: {result.exchangeRate}
          </Text>
          <Text style={styles.subText}>
            Conversion Amount: {result.conversionAmount}
          </Text>
          <Text style={styles.subText}>
            Final Amount: {result.finalAmount}
          </Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 30,
    color: "#222",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
    color: "#555",
  },
  input: {
    backgroundColor: "black",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    color: "white",
  },
  pickerWrapper: {
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 16,
  },
  resultBox: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#222",
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});
