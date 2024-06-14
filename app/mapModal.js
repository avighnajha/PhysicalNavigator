import React, { useEffect, useState } from 'react';
import { Modal, TouchableOpacity, Text,SafeAreaView, PermissionsAndroid } from 'react-native';
import MapView from 'react-native-maps';
import {COLORS, icons, images, SIZES} from "../constants";
import styles from '../styles.style';
//import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';

const MapModal=({visible, onClose})=>{
    const [location, setLocation] = useState(null);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }
      
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
      };
    useEffect(() => {
    getLocation();
    }, []);
    

    return(
        <Modal visible={visible}>
            <SafeAreaView style={{flex: 1, backgroundColor:COLORS.lightWhite}}>
                <MapView style={{flex:1}} 
                        initialRegion={{
                            latitude: location?.latitude || 37.78825,
                            longitude: location?.longitude || -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                />
                <TouchableOpacity style={styles.btnContainer} onPress={onClose}>
                    <Text style={{fontSize: 20}}>Close</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    )
};

export default MapModal;