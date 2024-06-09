import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from 'react-i18next'
import { ThemeContext } from "../theme/ThemeContext";


const Setting = ({ navigation }) => {

  const { theme } = useContext(ThemeContext);

  const handleNavigation = (screenName) => {
    // Navigate to the selected screen
    navigation.navigate(screenName);
    // alert(`Screen ${screenName} is under development`)
  };

  const { t } = useTranslation('setting');
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <TouchableOpacity
        style={[styles.button, { borderBottomColor: theme.colors.text }]}
        onPress={() => handleNavigation("History")}
      >
        <Text style={[styles.buttonText, { color: theme.colors.text }]}>{t('setting.history')}</Text>
        <Ionicons name="arrow-forward" size={24} color={theme.colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { borderBottomColor: theme.colors.text }]}
        onPress={() => handleNavigation("OrderDetail")}
      >
        <Text style={[styles.buttonText, { color: theme.colors.text }]}>{t('setting.orderDetails')}</Text>
        <Ionicons name="arrow-forward" size={24} color={theme.colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { borderBottomColor: theme.colors.text }]}
        onPress={() => handleNavigation("Address")}
      >
        <Text style={[styles.buttonText, { color: theme.colors.text }]}>{t('setting.address')}</Text>
        <Ionicons name="arrow-forward" size={24} color={theme.colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { borderBottomColor: theme.colors.text }]}
        onPress={() => handleNavigation("Payments")}
      >
        <Text style={[styles.buttonText, { color: theme.colors.text }]}>{t('setting.paymentMethod')}</Text>
        <Ionicons name="arrow-forward" size={24} color={theme.colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { borderBottomColor: theme.colors.text }]}
        onPress={() => handleNavigation("Languages")}
      >
        <Text style={[styles.buttonText, { color: theme.colors.text }]}>{t('setting.languages')}</Text>
        <Ionicons name="arrow-forward" size={24} color={theme.colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { borderBottomColor: theme.colors.text }]}
        onPress={() => handleNavigation("Theme")}
      >
        <Text style={[styles.buttonText, { color: theme.colors.text }]}>{t('setting.theme')}</Text>
        <Ionicons name="arrow-forward" size={24} color={theme.colors.text} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { borderBottomColor: theme.colors.text }]}
        onPress={() => handleNavigation("Help")}
      >
        <Text style={[styles.buttonText, { color: theme.colors.text }]}>{t('setting.help')}</Text>
        <Ionicons name="arrow-forward" size={24} color={theme.colors.text} />
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={[styles.logoutButtonText, { color: theme.colors.text }]}>{t('setting.logout')}</Text>
        <Ionicons name="arrow-forward" size={24} color={theme.colors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    backgroundColor: "transparent",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    borderBottomWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  logoutButton: {
    backgroundColor: "transparent",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default Setting;
