import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.background} source={require('../assets/lgSW.jpeg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
                <Text>Sell What you don't need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#fc5c65'
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 70,
        left: 120
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#4ecdc4'
    }
})

export default WelcomeScreen;