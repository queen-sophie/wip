// username, password, profile pic, first name last name, location?
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
import DateTimePickerModal from "react-native-modal-datetime-picker";

import accountCreationStyles from "./Styles/AccountCreationStyles";

const LogoIcon = require('../../../assets/logo-icons/RattleSecondaryLogo.png');

export default function SignUpStep1Screen() {
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigation = useNavigation();

    const handleSignUp = async () => {
        alert('Success! Your account has been created.'); // eslint-disable-line no-alert
        navigation.navigate('SignUpStep1a');
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
            style={accountCreationStyles.container}
        >
            <KeyboardAvoidingView
                style={accountCreationStyles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={headerHeight}
            >
                <View style={accountCreationStyles.logoContainer}>
                    <Image
                        source={LogoIcon}
                        style={accountCreationStyles.logo}
                    />
                </View>

                <View style={accountCreationStyles.formContainer}>
                    <TextInput
                        style={accountCreationStyles.input}
                        placeholder="Email"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        autoCapitalize="none"
                        keyboardType={email}
                    />
                    <TextInput
                        style={accountCreationStyles.input}
                        placeholder="Phone Number"
                        placeholderTextColor="#999"
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                        autoCapitalize="none"
                        keyboardType={phone}
                    />
                    <TextInput
                        style={accountCreationStyles.input}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={accountCreationStyles.input}
                        placeholder="Username"
                        placeholderTextColor="#999"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity onPress={() => handleSignUp()}>
                        <View style={accountCreationStyles.createAccountButton}>
                            <Text style={accountCreationStyles.createAccountButtonText}>
                                Create Account
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={accountCreationStyles.disclaimerText}>
                        By signing up, you agree to our Terms, Privacy Policy, and Cookie
                        Use
                    </Text>
                    <View style={accountCreationStyles.spacing} />
                    <TouchableOpacity onPress={() => handleGoBack()}>
                        <View style={accountCreationStyles.signInButton}>
                            <Text style={accountCreationStyles.signInButtonText}>Back</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
}

