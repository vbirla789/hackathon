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
import Announcement from "./AnnouncementPage";
import Donate from "./DonateForm";
import Report from "./ReportForm";

let LocationOfInterest = [
  {
    id: 1,
    title: "Verified",
    location: {
      latitude: 26.844027485190164,
      longitude: 75.56521283727687,
    },
    desc: "",
    color: "red",
  },
  {
    id: 2,
    title: "Second",
    location: {
      latitude: 19.089744682875306,
      longitude: 72.88109461119376,
    },
    desc: "MUMBAI",
    color: "yellow",
  },
  {
    id: 3,
    title: "SDRF Office Jaipur",
    location: {
      latitude: 26.90668156058224,
      longitude: 75.80240315046473,
    },
    desc: "State Disaster Relief Force",
    color: "yellow",
  },
];

export default function Admin() {
  const handleUpdatesPress = () => {
    Alert.alert("Disaster Updated", "Disaster has been verified");
  };
  const showLocInt = () => {
    return LocationOfInterest.map((item, index) => {
      return (
        <View key={index}>
          <Marker
            coordinate={item.location}
            title={item.title}
            description={item.desc}
            pinColor="yellow"
          />
          <Circle center={item.location} radius={3000} fillColor={item.color} />
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={handleUpdatesPress}
        style={styles.updatesButton}
      >
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 26.90668156058224,
            longitude: 75.80240315046473,
            latitudeDelta: 0.70056720951999,
            longitudeDelta: 0.75167910605669,
          }}
        >
          {showLocInt()}

          <Marker
            coordinate={{
              latitude: 26.844027485190164,
              longitude: 75.56521283727687,
            }}
            title="Dahmi Kalan"
            pinColor="green"
          />
          <Circle
            center={{
              latitude: 26.844027485190164,
              longitude: 75.56521283727687,
            }}
            radius={4000}
            fillColor="#D1FFBD"
          />
        </MapView>
      </View>
      <View style={styles.legend}>
        <View style={styles.col}>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: "lightblue" }]}
            ></View>
            <Text>Flood</Text>
          </View>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: "yellow" }]}
            ></View>
            <Text>Earthquake</Text>
          </View>
        </View>
        <View style={styles.col}>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: "red" }]}
            ></View>
            <Text>Fire</Text>
          </View>
          <View style={styles.legendItem}>
            <View
              style={[styles.legendColor, { backgroundColor: "orange" }]}
            ></View>
            <Text>Drought</Text>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  updatesButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    zIndex: 1,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  mapContainer: {
    flex: 1,
    marginTop: 0,
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  legend: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
    margin: 20,
    marginHorizontal: 30,
    gap: 10,
  },
  legendItem: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    marginBottom: 3,
  },
  legendColor: {
    height: 15,
    width: 15,
    backgroundColor: "red",
  },
});
