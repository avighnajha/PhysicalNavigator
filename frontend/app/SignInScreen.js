import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image,Alert} from 'react-native';
import styles from '../styles.style';
import { useRouter } from 'expo-router';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "../components/firebase";
import {COLORS, icons, images, SIZES} from "../constants";
import axios from "axios";


const SignInScreen = () => {
    router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    // useEffect(() => {
        //     const unsubscribe = auth.onAuthStateChanged(user => {
        //         if (user) {
        //             // User is signed in.
        //             console.log("User is signed in: ", user.email);
        //             setLoggedIn(true);
        //             setEmail(user.email);
        //         } else {
        //             // User is signed out.
        //             console.log("User is signed out");
        //             setLoggedIn(false);
        //         }
        //     });
        //
        //     // Cleanup subscription on unmount
        //     return () => unsubscribe();
        // }, []);
        const onSignInPressed = async () => {
            console.log("Log in attempt:", email, password);
            try {
                const response = await fetch("http://localhost:8080/api/users/login", {
                    method: 'POST',
                    headers: {'Content-type': 'Application/json'},
                    body: JSON.stringify({email, password})
                });
                console.log("Request to login sent")
                if (response.status === 200) {
                    Alert.alert('Success', 'User Logged in');
                    setLoggedIn(true);
                }
            } catch (error) {
                Alert.alert("Error", "Login failed please recheck credentials!")
            }
        }
        const onForgotPasswordPressed = () => {
            console.warn("Sign In Pressed");
        }
        // useEffect(() => {
        //     // if(loggedIn){
        //     //     router.back();
        //     // }
        // }, [loggedIn]);
        if (loggedIn) {
            return (
                <View style={styles.profileContainer}>
                    <View style={styles.profileContainer}>
                        <Image
                            source={images.profile} // Replace with actual profile picture URL
                            style={styles.profilePic}
                        />
                        <Text style={styles.emailText}>{email}</Text>
                    </View>
                    <View style={styles.myWalksContainer}>
                        <Text style={styles.myWalksTitle}>MyWalks</Text>
                        {/* Add content for MyWalks section here */}
                    </View>
                    <CustomButton text={"Log Out"} onPress={() => signOut(auth)} type="PRIMARY"/>
                </View>
            )
        }
        return (
            <View style={styles.SignInRoot}>
                <View style={{marginBottom: 30}}>
                    <Text style={styles.SignInText}>Sign In</Text>
                </View>
                <CustomInput placeholder={"Email"} value={email} setValue={setEmail}/>
                <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
                <CustomButton text={"Sign In"} onPress={onSignInPressed}/>
                <CustomButton text={"Sign Up"} onPress={() => router.push("SignUpScreen")} type='SECONDARY'/>
                <CustomButton text={"Forgot Password"} onPress={onForgotPasswordPressed} type="TERTIARY"/>
            </View>
        );
    }

export default SignInScreen;