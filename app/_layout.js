import { Stack } from "expo-router";
import {Home} from "./index.js";
import SignInScreen from './SignInScreen.js';

const Layout = () => {
    return(
    <Stack>
            <Stack.Screen name="index" path="/"/>
            <Stack.Screen name="SignInScreen" path="/SignInScreen"/>
    </Stack>
    );
};

export default Layout;
