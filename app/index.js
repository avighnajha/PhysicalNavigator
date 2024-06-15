import { useRouteInfo, useRouter } from 'expo-router/build/hooks';
import {useState} from 'react';
import {View, ScrollView, SafeAreaView, Text, TouchableOpacity, Image, Modal, TurboModuleRegistry} from 'react-native';
import MapView from 'react-native-maps';
import {Stack} from 'expo-router';
import styles from '../styles.style';
import {COLORS, icons, images, SIZES} from "../constants";
import MapModal from './mapModal';


const Home =()=>{
    const router = useRouter();
    const [startConfirmed, setStartConfirmed] = useState(false);
    const [startLocation, setStartLocation] = useState(null);

    const [endConfirmed, setEndConfirmed] = useState(false);
    const [endLocation, setEndLocation] = useState(null);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerRight: () => (
                        <TouchableOpacity style={styles.btnContainerHead} onPress = {()=>{}}>
                            <Image source={images.profile} resizeMode="cover"
                            style={styles.btnImg("100%")}
                            onError={(error) => console.log(error)}
                            />
                        </TouchableOpacity>
                    ),
                    headerTitle: ""
                }}
            />
        
            <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
                <View style={{flex:1,padding: SIZES.xSmall, alignItems: "center", justifyContent: "center"}}>
                    {startConfirmed? (<Text style= {styles.wlcTxt}>Where would you like to end?</Text>) : (<Text style= {styles.wlcTxt}>Where would you like to Start?</Text>)}
                    <MapModal
                    visible={true}
                    setStartConfirmed={setStartConfirmed}
                    setStartLocation={setStartLocation}
                    startLocation={startLocation}
                    setEndConfirmed={setEndConfirmed}
                    setEndLocation={setEndLocation}
                    endLocation={endLocation}
                    />
                </View>
                
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Home;