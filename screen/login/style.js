import {StyleSheet} from 'react-native'

const getStylesLogin = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background, // Thêm backgroundColor
    },
    innerContainer: {
      width: '80%',
      alignItems: 'center',
    },
    anh: {
      height: 300,
      width: 300,
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 44,
      borderRadius: 20,
      marginTop: 20,
      backgroundColor: theme.colors.card,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
      marginVertical: 20,
      color: theme.colors.text, // Set text color
    },
    loginButton: {
      backgroundColor: '#7A4723',
      borderRadius: 20,
      marginTop: 20,
      padding: 10,
      height: 40,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  
    },
  });
  
  export default getStylesLogin;