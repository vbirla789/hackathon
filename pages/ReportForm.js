import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { Ionicons } from "@expo/vector-icons"; // You can use your preferred icons
import { Notifications } from "expo";

const ReportForm = () => {
  const [location, setLocation] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [description, setDescription] = useState("");

  const events = ["Flood", "Fire Hazard", "LandSlide", "Crime"]; // Add more events as needed

  const handleLocationChange = (text) => {
    setLocation(text);
  };

  const handleEventSelect = (index) => {
    setSelectedEvent(events[index]);
  };

  const handleDescriptionChange = (text) => {
    setDescription(text);
  };

  const handleSubmit = async () => {
    try {
      // Handle form submission here
      console.log("Location:", location);
      console.log("Selected Event:", selectedEvent);
      console.log("Description:", description);

      Alert.alert(
        "Your report has been submitted, Authorities have been notified"
      );
    } catch (error) {
      console.error("Error submitting report:", error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.heading}>Report an Issue</Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Your Location:</Text>
        <TextInput
          placeholder="Dahmi Kalan Rajasthan 303007"
          style={styles.input}
          value={location}
          onChangeText={handleLocationChange}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Select the Issue:</Text>
        <ModalDropdown
          options={events}
          onSelect={handleEventSelect}
          textStyle={styles.dropdownText}
          dropdownTextStyle={styles.dropdownText}
          defaultValue={"Select the issue"}
          dropdownStyle={styles.dropdownContainer}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Describe the Issue:</Text>
        <TextInput
          placeholder="Enter a detailed description"
          multiline
          style={styles.descriptionInput}
          value={description}
          onChangeText={handleDescriptionChange}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Report</Text>
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
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: "#333",
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
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10, // Increased border radius
    color: "#333",
    backgroundColor: "#fff", // White background
  },
  dropdownContainer: {
    width: "90%",
    marginBottom: 20,
  },
  descriptionInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10, // Increased border radius
    padding: 16, // Increased padding
    minHeight: 150, // Increased minimum height
    backgroundColor: "#fff", // White background
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

export default ReportForm;
