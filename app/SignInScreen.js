import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from '../styles.style';
import { useRouter } from 'expo-router';

const SignInScreen = () => {
    router = useRouter();
    return (
        <View>
            <Text style={styles.SignInText}>JustWalk</Text>
        </View>
    );
}

export default SignInScreen;