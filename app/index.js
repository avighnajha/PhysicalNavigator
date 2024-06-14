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
    const [modalVisible, setModalVisible] = useState(false);
    const [mapModalVisible, setMapModalVisible] = useState(false);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerRight: () => (
                        <TouchableOpacity style={styles.btnContainerHead} onPress = {()=>{setModalVisible(true)}}>
                            <Image source={icons.chevronLeft} resizeMode="cover"
                            style={styles.btnImg("100%")}
                            onError={(error) => console.log(error)}
                            />
                        </TouchableOpacity>
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
                <View style={{flex:0,padding: SIZES.xSmall, alignItems: "center", justifyContent: "center"}}>
                    <TouchableOpacity 
                    style={styles.btnContainer}
                    onPress={() => {setModalVisible(true)}}
                    >
                        <Text style={{fontSize: 20}}>Start Journey</Text>
                    </TouchableOpacity>
                    <Modal 
                        animationType="none"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={()=>{setModalVisible(!modalVisible)}}
                        >
                            <View style={{flex:0.25, padding: SIZES.medium, justifyContent: "center", alignItems: "center"}}>
                                <TouchableOpacity style={styles.btn2} onPress={()=>setMapModalVisible(true)}>
                                    <Text style={{fontSize: 20}}>Use Current Location</Text>
                                </TouchableOpacity>
                                <MapModal
                                    visible={mapModalVisible}
                                    onClose={()=>setMapModalVisible(false)}
                                />
                                <TouchableOpacity style={styles.btn2}>
                                    <Text style={{fontSize: 20}}>Select location</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn2} onPress={() => setModalVisible(false)}>
                                <Text style={{fontSize: 20}}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                </View>
                <View style={{flex:1, padding: SIZES.xLarge, justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={{fontSize: 20}}>End Journey</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;