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
  // {
  //   title: "Your Location",
  //   location: {
  //     latitude: 26.844027485190164,
  //     longitude: 75.56521283727687,
  //   },
  //   desc: "",
  // },
  {
    id: 1,
    title: "Second",
    location: {
      latitude: 19.089744682875306,
      longitude: 72.88109461119376,
    },
    desc: "MUMBAI",
  },
];

export default function Home({ navigation }) {
  const [location, setLocation] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }

  // useEffect(() => {
  //   if (location && location.coords) {
  //     console.log(location);
  //     console.log(location.coords.latitude);
  //     console.log(location.coords.longitude);
  //   }
  // }, [location]);

  // useEffect(async () => {
  //   try {
  //     const payload = {
  //       email: "email",
  //       location: {
  //         type: "Point",
  //         coordinates: [location.coords.latitude, location.coords.longitude],
  //       },
  //     };
  //     const response = await fetch("http://10.52.74.59/user/update_location", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     const responseStatus = response.status;
  //     const data = await response.json();
  //     console.log(data);
  //     console.log(responseStatus);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // });

  const showLocInt = () => {
    return LocationOfInterest.map((item, index) => {
      return (
        <View>
          <Marker
            key={index}
            coordinate={item.location}
            title={item.title}
            description={item.desc}
            pinColor="yellow"
          />
          <Circle
            center={item.location}
            radius={1000}
            fillColor="red"
            key={item.index}
          />
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.head}>
        <Text style={{ color: "black", fontSize: 20 }}>
          DISASTER MANAGEMENT
        </Text>
      </View> */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 26.844027485190164,
            longitude: 75.56521283727687,
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
            title="Your Location"
            pinColor="green"
          />
          <Circle
            center={{
              latitude: 26.844027485190164,
              longitude: 75.56521283727687,
            }}
            radius={10000}
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
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Announcement");
          }}
          style={{
            paddingVertical: 10,
            backgroundColor: "white",
            borderRadius: 5,
            paddingHorizontal: 5,
            width: 90,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "black" }}>Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Report");
          }}
          style={{
            paddingVertical: 10,
            backgroundColor: "red",
            borderRadius: 5,
            paddingHorizontal: 5,
            width: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Donate");
          }}
          style={{
            paddingVertical: 10,
            backgroundColor: "white",
            borderRadius: 5,
            paddingHorizontal: 5,
            width: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "black" }}>Donate</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100vh",
  },
  head: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mapContainer: {
    flex: 1,
    marginTop: 0,
    alignItems: "center",
  },
  map: {
    height: "100%",
    width: "100%",
    flex: 1,
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
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "#F3F2F7",
    backgroundColor: "white",
    height: 80,
    padding: 10,
  },
});
