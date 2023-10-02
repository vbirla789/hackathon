import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Home from "./Home";
import fetch from "node-fetch";

const Form = ({ navigation }) => {
  const [formType, setFormType] = useState("user"); // Default to 'user' form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [user, setUser] = useState({
    fullname: "",
    location: "",
  });

  const handleUserButtonClick = () => {
    setFormType("user");
  };

  const handleAdminButtonClick = () => {
    setFormType("admin");
  };

  const handleSubmit = async () => {
    if (formType === "user") {
      // Handle user login logic with email and password
      console.log(`User Email: ${email}`);
      console.log(`User Password: ${password}`);

      // Make the API call
      try {
        const response = await fetch("http://10.52.74.59/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        const responseStatus = response.status;
        const data = await response.json();
        console.log(data);
        setUser((fullname = data.fullname));
        console.log(responseStatus);
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (formType === "admin") {
      // Handle admin login logic with id and password
      console.log(`Admin ID: ${id}`);
      console.log(`Admin Password: ${password}`);

      // Make the API call
      try {
        const response = await fetch("http://10.52.74.59/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            password: password,
          }),
        });

        const data = await response.json();
        console.log(data); // Log the response from the API
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  // console.log(user);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.head}>SMART CRISIS RESPONSE</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, formType === "user" && styles.activeButton]}
          onPress={handleUserButtonClick}
        >
          <Text
            style={
              formType === "user" ? styles.activeButtonText : styles.buttonText
            }
          >
            User
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, formType === "admin" && styles.activeButton]}
          onPress={handleAdminButtonClick}
        >
          <Text
            style={
              formType === "admin" ? styles.activeButtonText : styles.buttonText
            }
          >
            Admin
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        {/* <Text style={styles.title}>
          {formType === "user" ? "User Login" : "Admin Login"}
        </Text> */}
        <View style={styles.inputContainer}>
          {formType === "user" ? (
            <>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={styles.input}
              />
            </>
          ) : (
            <>
              <TextInput
                placeholder="ID"
                value={id}
                onChangeText={setId}
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={styles.input}
              />
            </>
          )}
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          {formType === "user" ? (
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                navigation.navigate("Admin");
              }}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 50,
    backgroundColor: "#f2f2f2",
  },
  head: {
    color: "#007bff",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 50,
    textAlign: "center",
  },
  form: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 30,
    width: 300,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeButton: {
    backgroundColor: "#007bff", // Active button background color
  },
  buttonText: {
    color: "#333", // Button text color
  },
  activeButtonText: {
    color: "#fff", // Active button text color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", // Title text color
    textAlign: "center",
  },
  inputContainer: {
    width: 300,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc", // Border color
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#fff", // Input background color
  },
  submitButton: {
    backgroundColor: "#007bff", // Submit button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 100,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#fff", // Submit button text color
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Form;
