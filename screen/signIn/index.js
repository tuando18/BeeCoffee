import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png';
import apiUrl from '../../apiUrl';
const Register = ({ navigation }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const registerUser = (userData) => {
    fetch('http://'+apiUrl.tuan+':3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('User registered successfully:', data);
      console.log('Registration successful');
      navigation.navigate('main', { nameUserSend: fullname

      });
    })
    .catch(error => {
      console.error('Error registering user:', error);
    });
  };
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = (email) => {
    return emailPattern.test(email);
  };
  const phonePattern = /^[0-9]{10}$/;
  const isValidPhone = (phone) => {
    return phonePattern.test(phone);
  };




  const handleRegister = () => {
    if (fullname.trim() === '' || username.trim() === '' || password.trim() === ''|| email.trim() ==='' || phone.trim() ==='' || address.trim() ==='') {
      setErrorMessage('Please fill in all required fields.');
    }else if(!isValidEmail(email)) {
      setErrorMessage('Please fill true email.');
      
    } else if (!isValidPhone(phone)) {
      setErrorMessage('Please fill true phone.');
    }
     else {
      const userData = {
        username: username,
        password: password,
        name: fullname,
        email: email,
        phone: phone,
        address: address,
      };
      registerUser(userData);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.logo} source={logo} />
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 30 }}>Create an Account</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder='Fullname'
              style={styles.input}
              onChangeText={(text) => setFullname(text)}
              value={fullname}
            />
            <TextInput
              placeholder='Email'
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
              keyboardType='email-address'
            />
            <TextInput
              placeholder='Username'
              style={styles.input}
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
            <TextInput
              placeholder='Password'
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry
            />
            <TextInput
              placeholder='Phone'
              style={styles.input}
              onChangeText={(text) => setPhone(text)}
              value={phone}
              keyboardType='phone-pad'
            />
            <TextInput
              placeholder='Address'
              style={styles.input}
              onChangeText={(text) => setAddress(text)}
              value={address}
            />
          </View>

          {errorMessage !== '' && (
            <Text style={styles.errorText}>{errorMessage}</Text>
          )}

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInLink} onPress={() => navigation.navigate('Login')}>
            <Text>Already have an account? </Text>
            <Text style={styles.linkText}>Login now</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 350,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: '#35C2C1',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInLink: {
    flexDirection: 'row',
    marginTop: 60,
  },
  linkText: {
    color: '#35C2C1',
  },
});

export default Register;
