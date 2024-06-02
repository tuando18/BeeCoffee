import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

const Languages = ({ navigation }) => {
    const { t, i18n } = useTranslation('language');

    const handleLanguageSelection = (lng) => {
        i18n.changeLanguage(lng);
        alert(`Language selected: ${lng}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{t('language.header')}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleLanguageSelection('en')}
            >
                <Text style={styles.buttonText}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleLanguageSelection('vi')}
            >
                <Text style={styles.buttonText}>Vietnamese</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Languages;
