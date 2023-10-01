import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { Ionicons } from "@expo/vector-icons"; // You can use your preferred icons

const DonateForm = () => {
  const [username, setUsername] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null); // Default event selection
  const [donationAmount, setDonationAmount] = useState("");

  const events = ["Event 1", "Event 2", "Event 3", "Event 4"]; // Add more events as needed

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handleEventSelect = (index) => {
    setSelectedEvent(events[index]);
  };

  const handleAmountChange = (amount) => {
    setDonationAmount(amount);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Username:", username);
    console.log("Selected Event:", selectedEvent);
    console.log("Donation Amount:", donationAmount);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.heading}>Donate to a Cause</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Enter Your Name:</Text>
        <TextInput
          placeholder="Your Name"
          style={styles.input}
          value={username}
          onChangeText={handleUsernameChange}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Select a Cause:</Text>
        <ModalDropdown
          options={events}
          onSelect={handleEventSelect}
          textStyle={styles.dropdownText}
          dropdownTextStyle={styles.dropdownText}
          defaultValue={"Select a Cause"}
          dropdownStyle={styles.dropdownContainer}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Enter Donation Amount (USD):</Text>
        <View style={styles.inputContainer}>
          <Ionicons
            name="ios-cash"
            size={24}
            color="#007AFF"
            style={styles.icon}
          />
          <TextInput
            placeholder="Amount"
            keyboardType="numeric"
            style={styles.input}
            value={donationAmount}
            onChangeText={handleAmountChange}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Donate Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#333",
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10, // Increased border radius
    paddingVertical: 12,
    paddingHorizontal: 16, // Increased padding
    backgroundColor: "#fff", // White background
  },
  dropdownText: {
    fontSize: 18,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    borderRadius: 10, // Increased border radius
    color: "#333",
    backgroundColor: "#fff", // White background
  },
  dropdownContainer: {
    width: "90%",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10, // Increased border radius
    paddingHorizontal: 16, // Increased padding
    backgroundColor: "#fff", // White background
  },
  icon: {
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 10, // Increased border radius
    paddingVertical: 16,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default DonateForm;
