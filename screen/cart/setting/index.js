import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Setting = ({ navigation }) => {
  const handleNavigation = (screenName) => {
    // Navigate to the selected screen
    navigation.navigate(screenName);
    // alert(`Screen ${screenName} is under development`)
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation("History")}
      >
        <Text style={styles.buttonText}>History</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation("PersonalDetails")}
      >
        <Text style={styles.buttonText}>Personal Details</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation("Address")}
      >
        <Text style={styles.buttonText}>Address</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation("Payments")}
      >
        <Text style={styles.buttonText}>Payment Method</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation("About")}
      >
        <Text style={styles.buttonText}>About</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation("Help")}
      >
        <Text style={styles.buttonText}>Help</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logoutButtonText}>Log out</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

// ...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    borderBottomWidth: 1, // Add this line
    borderBottomColor: "black", // Add this line
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  logoutButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default Setting;
