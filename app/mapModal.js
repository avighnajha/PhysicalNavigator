import React, { useEffect, useState } from 'react';
import { Modal, TouchableOpacity, Text,SafeAreaView, PermissionsAndroid, View,ActivityIndicator } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {COLORS, icons, images, SIZES} from "../constants";
import styles from '../styles.style';
//import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';

const MapModal=({visible, onClose, setStartConfirmed})=>{
    const [location, setLocation] = useState(null);
    const [loc_title, setLocTitle] = useState("Current Location");
    const [isLoading, setIsLoading] = useState(true);
    const getCurLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }
        
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        setIsLoading(false);
        console.log(location);
      };
    useEffect(() => {
        getCurLocation();
        
    }, []);

    const handleConfirmStart = () => {
        setStartConfirmed(true);
    };
        if (isLoading) {
            return <ActivityIndicator />;
        }
        else {
    return (
        <View visible={visible}>
            <SafeAreaView style={{flex: 1, backgroundColor:COLORS.lightWhite}}>
                <View style={styles.mapContainer}>
                    <MapView style={styles.map} 
                            initialRegion={{
                                latitude: location?.latitude || 37.78825,
                                longitude: location?.longitude || -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                            onPress={(e) => {setLocation(e.nativeEvent.coordinate), setLocTitle("Selected Location")}}
                    >
                        {location && (<Marker 
                        coordinate={{latitude: location.latitude, longitude: location.longitude}}
                        title={loc_title}
                        />
                        )}
                    </MapView>
                </View>
                <TouchableOpacity style={styles.btnContainer} onPress={handleConfirmStart}>
                    <Text style={{fontSize: 20}}>Confirm Start</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}
};

export default MapModal;