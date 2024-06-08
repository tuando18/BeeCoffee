import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";

import getStylesLogin from "../login/style";
import { ThemeContext } from "../theme/ThemeContext";

import logo from "../../assets/logo.png";
import apiUrl from "../../apiUrl";
import { useTranslation } from 'react-i18next';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [usersArray, setUsersArray] = useState([]);
  const [passwordsArray, setPasswordsArray] = useState([]);
  const [name, setName] = useState([]);
  let nameUser = "name";

  const { t } = useTranslation('login');
  const { theme } = useContext(ThemeContext); // Use theme from ThemeContext
  const styles = getStylesLogin(theme); // Apply styles based on the theme

  useEffect(() => {
    getDatafromAPI();
  }, []);

  const getDatafromAPI = () => {
    fetch("http://" + apiUrl.tuan + ":3000/users")
      .then((response) => response.json())
      .then((data) => {
        const users = data.map((user) => user.username);
        const passwords = data.map((user) => user.password);
        const name = data.map((user) => user.name);

        setUsersArray(users);
        setPasswordsArray(passwords);
        setName(name);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const login = () => {
    const index = usersArray.indexOf(username);
    if (index !== -1 && passwordsArray[index] === password) {
      nameUser = name[index];
      return true;
    } else {
      return false;
    }
  };

  const handleLogin = () => {
    const check = login();

    if (check) {
      console.log("Login successful");
      navigation.navigate("main", { nameUserSend: nameUser });
      setUsername("");
      setPassword("");
      setErrorMessage("");
    } else {
      console.log("Invalid credentials");
      setErrorMessage("Username or password wrong. Try again!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.anh} source={logo} />
          <Text style={{ fontSize: 22, fontWeight: "bold", color: theme.colors.text}}>
            {t('login.welcome')}
          </Text>
          <Text style={{ fontSize: 19, marginTop: 10, marginBottom: 30, color: theme.colors.text }}>
          {t('login.loginToContinue')}
          </Text>

          <TextInput
            placeholder={t('login.username')}
            placeholderTextColor={theme.colors.text}
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <TextInput
            placeholder={t('login.password')}
            placeholderTextColor={theme.colors.text}
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
          />

          {errorMessage !== "" && (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {errorMessage}
            </Text>
          )}

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>{t('login.login')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flexDirection: "row", marginTop: 100 }}
            onPress={() => {
              navigation.navigate("Register");
              setUsername("");
              setPassword("");
              setErrorMessage("");
            }}
          >
            <Text style={{color: theme.colors.text}}>{t('login.dontHaveAccount')}</Text>
            <Text style={{ color: "#35C2C1" }}> {t('login.registerNow')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{color: theme.colors.text}}>{t('login.forgotPassword')}</Text>
            <Text style={{ color: "#35C2C1" }}> {t('login.forgotPassword')}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
