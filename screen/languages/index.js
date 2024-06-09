import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../theme/ThemeContext'; // Import ThemeContext

const Languages = ({ navigation }) => {
    const { t, i18n } = useTranslation('language');
    const { theme } = useContext(ThemeContext); // Use theme from ThemeContext

    const handleLanguageSelection = (lng) => {
        i18n.changeLanguage(lng);
        alert(`Language selected: ${lng}`);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Text style={[styles.heading, { color: theme.colors.text }]}>{t('language.header')}</Text>
            <TouchableOpacity
                style={[styles.button, { borderBottomColor: theme.colors.border }]}
                onPress={() => handleLanguageSelection('en')}
            >
                <Text style={[styles.buttonText, { color: theme.colors.text }]}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { borderBottomColor: theme.colors.border }]}
                onPress={() => handleLanguageSelection('vi')}
            >
                <Text style={[styles.buttonText, { color: theme.colors.text }]}>Vietnamese</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Languages;
