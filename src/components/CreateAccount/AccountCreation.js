// name, email, DOB,
import 'react-native-gesture-handler';
import 'react-native-safe-area-context';

import { useHeaderHeight } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const LogoIcon = require('../../../assets/logo-icons/RattleSecondaryLogo.png');

// TODO reconnect to backend
// const backendURL = 'http://10.0.0.4:8888/api/auth/signup';
//
// TODO: check input validation (email formating **@.**, no nulls)

export default function SignUpStep1Screen() {
    const [name, setName] = useState('');
    // const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [birthday, setBirthday] = useState();

    const navigation = useNavigation();

    const handleSignUp = async () => {
        alert('Success! Your account has been created.'); // eslint-disable-line no-alert
        navigation.navigate('SignUpStep1a');

        // TODO: reconnect to backend
        /*
          const data = {
              name,
              username,
              email,
              password,
            };

          try {
            const response = await fetch(backendURL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });

            if (response.ok) {
              alert('Success! Your account has been created.');
              navigation.navigate('SignUpStep1a');
            } else {
              alert('Sign up failed. Please try again.');
            }
          } catch (error) {
            console.error('Error during sign up:', error);
            alert('An error occurred during sign up. Please try again later.');
          }
        */
    };


    const handleGoBack = () => {
        navigation.goBack();
    };

    const headerHeight = useHeaderHeight();
    return (
        <LinearGradient
            colors={['rgb(126, 98, 114)', 'rgb(161, 105, 111)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={headerHeight}
            >
                <View style={styles.logoContainer}>
                    <Image
                        source={LogoIcon}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor="#999"
                        value={name}
                        onChangeText={(text) => setName(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="#999"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email or Phone"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        autoCapitalize="none"
                    />

                    <TouchableOpacity onPress={() => handleSignUp()}>
                        <View style={styles.createAccountButton}>
                            <Text style={styles.createAccountButtonText}>
                                Create Account
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.disclaimerText}>
                        By signing up, you agree to our Terms, Privacy Policy, and Cookie
                        Use
                    </Text>
                    <View style={styles.spacing} />
                    <TouchableOpacity onPress={() => handleGoBack()}>
                        <View style={styles.signInButton}>
                            <Text style={styles.signInButtonText}>Back</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}