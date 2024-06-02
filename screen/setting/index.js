import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from 'react-i18next'

const Setting = ({ navigation }) => {
  const handleNavigation = (screenName) => {
    // Navigate to the selected screen
    navigation.navigate(screenName);
    // alert(`Screen ${screenName} is under development`)
  };

  const { t } = useTranslation('setting');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation("History")}
      >
        <Text style={styles.buttonText}>{t('setting.history')}</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation("OrderDetail")}
      >
        <Text style={styles.buttonText}>{t('setting.orderDetails')}</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation("Address")}
      >
        <Text style={styles.buttonText}>{t('setting.address')}</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation("Payments")}
      >
        <Text style={styles.buttonText}>{t('setting.paymentMethod')}</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation("Languages")}
      >
        <Text style={styles.buttonText}>{t('setting.languages')}</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigation("Help")}
      >
        <Text style={styles.buttonText}>{t('setting.help')}</Text>
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.logoutButtonText}>{t('setting.logout')}</Text>
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
