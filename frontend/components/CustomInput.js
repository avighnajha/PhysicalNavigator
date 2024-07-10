import React from "react"
import {View, Text, TextInput} from "react-native"
import styles from "../styles.style";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
             placeholder={placeholder}
             style={styles.input}
             value = {value}
             onChangeText={setValue}
             secureTextEntry={secureTextEntry}
             />
        </View>
    )
}

export default CustomInput;