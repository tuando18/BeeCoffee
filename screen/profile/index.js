import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from 'react-i18next';
import { ThemeContext } from "../theme/ThemeContext"; // Import ThemeContext

const ProfileForm = ({ navigation }) => {
  const [name, setName] = useState("kmt");
  const [email, setEmail] = useState("123g@fpt.edu.vn");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const { t } = useTranslation('profile');
  const { theme } = useContext(ThemeContext); // Use theme from ThemeContext

  const handleSave = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ marginTop: 50 }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={[styles.heading, { color: theme.colors.text }]}>{t('profile.heading')}</Text>
      </View>
      <Image style={styles.avatar} source={require("../../assets/avt.jpeg")} />

      <TextInput
        style={[styles.input, { borderColor: theme.colors.border, color: theme.colors.text }]}
        placeholder="Enter your name"
        placeholderTextColor={theme.colors.placeholder}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={[styles.input, { borderColor: theme.colors.border, color: theme.colors.text }]}
        placeholder="Enter your email"
        placeholderTextColor={theme.colors.placeholder}
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={[styles.input, { borderColor: theme.colors.border, color: theme.colors.text }]}
        placeholder="Enter your phone number"
        placeholderTextColor={theme.colors.placeholder}
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />

      <TouchableOpacity style={[styles.saveButton, { backgroundColor: theme.colors.buttonText1 }]} onPress={handleSave}>
        <Text style={[styles.saveButtonText, { color: theme.colors.text }]}>{t('profile.btn')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  heading: {
    marginTop: 50,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "100%",
  },
  saveButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileForm;
