import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styles.style';
import { useRouter } from 'expo-router';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "../components/firebase";



const SignUpScreen = () => {
    router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password_repeat, setPassword_repeat] = useState("");
    const [email, setEmail] = useState("");
    const [registered, setRegistered] = useState(false);
    const [message, setMessage] = useState('');


    const onSignUpPressed = async () => {
        console.log("SIGNING UP")
        try {
            const response = await fetch("http://localhost:8080/api/users/signup", {
                method: 'POST',
                headers: {'Content-type': 'Application/json'},
                body: JSON.stringify({username, email, password})
            });

            if (response.ok) {
                const data = await response.json();
                setMessage('SignUp successful')
            } else {
                const errorData = await response.json();
                setMessage(`Error: ${errorData.message}`)
            }
        }
        catch (error) {
            setMessage(`Error: ${error.message}`)
        }
        // createUserWithEmailAndPassword(auth, email, password)
        // .then(
        //     userCredentials => {
        //         const user = userCredentials.user;
        //         console.log(user.email);
        //         setRegistered(true);
        //     }
        // )
        // .catch(e =>alert(e.message))
    }

    useEffect(() => {
        if(registered){
            router.back();
        }
    }, [registered]);

    return (
        <View style={styles.SignInRoot}>
            <View style={{marginBottom: 30}}>
                <Text style={styles.SignInText}>Sign Up</Text>
            </View>
            <CustomInput placeholder={"Username"} value={username} setValue={setUsername}/>
            <CustomInput placeholder={"Email"} value={email} setValue={setEmail}/>
            <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomInput placeholder={"Re-enter Password"} value={password_repeat} setValue={setPassword_repeat} secureTextEntry={true}/>
            <CustomButton text={"Register"} onPress={onSignUpPressed}/>
            {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
    );
}

export default SignUpScreen;