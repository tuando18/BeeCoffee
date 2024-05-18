import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
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
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 20,
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
  
  export default styles;