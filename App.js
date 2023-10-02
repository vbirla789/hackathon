import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AnnouncementPage from "./pages/AnnouncementPage";
import ReportForm from "./pages/ReportForm";
import DonateForm from "./pages/DonateForm";
import Admin from "./pages/Admin";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Announcement" component={AnnouncementPage} />
        <Stack.Screen name="Report" component={ReportForm} />
        <Stack.Screen name="Donate" component={DonateForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, height: "100vh" },
});
