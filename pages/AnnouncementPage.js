import React from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";

const announcements = [
  {
    time: "2 hours ago",
    department: "Fire Control",
    text: "Announcement 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgColor: "#720026", // Reduced opacity (70%)
  },
  {
    time: "3 hours ago",
    department: "Police",
    text: "Announcement 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "#ce4257", // Reduced opacity (70%)
  },
  {
    time: "4 hours ago",
    department: "Forest Department",
    text: "Announcement 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    bgColor: "#ff7f51", // Reduced opacity (70%)
  },
  {
    time: "5 hours ago",
    department: "Fire Control",
    text: "Announcement 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    bgColor: "#ff9b54", // Reduced opacity (70%)
  },
  {
    time: "6 hours ago",
    department: "Police",
    text: "Announcement 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    bgColor: "#ce4257", // Reduced opacity (70%)
  },
];

const AnnouncementPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.pageTitle}>Announcements</Text>
      <ScrollView>
        {announcements.map((announcement, index) => (
          <View
            key={index}
            style={{
              ...styles.announcementContainer,
              backgroundColor: announcement.bgColor,
            }}
          >
            <Text style={styles.time}>{announcement.time}</Text>
            <Text style={styles.department}>{announcement.department}</Text>
            <Text style={styles.text}>{announcement.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light gray background
    paddingTop: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  announcementContainer: {
    padding: 16,
    marginBottom: 20,
    borderRadius: 8,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  time: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#fff",
  },
  department: {
    fontSize: 16,
    marginBottom: 4,
    color: "#fff",
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    color: "#fff",
    marginTop: 4,
  },
});

export default AnnouncementPage;
