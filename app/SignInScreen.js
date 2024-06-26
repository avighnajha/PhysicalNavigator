import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles.style';
import { useRouter } from 'expo-router';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SignInScreen = () => {
    router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={{marginBottom: 30}}>
                <Text style={styles.SignInText}>Sign In</Text>
            </View>
            <CustomInput placeholder={"Username"} value={username} setValue={setUsername}/>
            <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomButton/>

        </View>
    );
}

export default SignInScreen;