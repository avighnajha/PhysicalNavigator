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
    const [mapModalVisible, setMapModalVisible] = useState(false);
    const [startConfirmed, setStartConfirmed] = useState(false);
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
            {/* <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
                <View style={{flex:0,padding: SIZES.xSmall, alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity 
                    style={styles.btnContainer}
                    onPress={() => {setMapModalVisible(true)}}
                    >
                        <Text style={{fontSize: 20}}>Mark start</Text>
                    </TouchableOpacity>
                    <MapModal
                    visible={mapModalVisible}
                    onClose={()=>setMapModalVisible(false)}
                    setStartConfirmed={setStartConfirmed}
                    />
                </View>
                <View style={{flex:1, padding: SIZES.xLarge, justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={{fontSize: 20}}>Mark end</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView> */}
            <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
                <View style={{flex:0,padding: SIZES.xSmall, alignItems: "center", justifyContent: "center"}}>
                    {startConfirmed? (<Text>Where would you like to end?</Text>) : (<Text>Where would you like to Start?</Text>)}
                    <MapModal
                    visible={true}
                    onClose={()=>setMapModalVisible(false)}
                    setStartConfirmed={setStartConfirmed}
                    />
                </View>
                
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Home;