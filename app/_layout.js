import { Stack } from "expo-router";
import {Home} from "./index.js";
import SignInScreen from './SignInScreen.js';

const Layout = () => {
    return(
    <Stack>
            <Stack.Screen name="index" path="/"/>
            <Stack.Screen name="SignInScreen" path="/SignIn" options={{title:"JustWalk"}}/>
            <Stack.Screen name="SignUpScreen" path="/SignUp" options={{title:"JustWalk"}}/>
    </Stack>
    );
};

export default Layout;
