import React, { useEffect, useState } from 'react';
import { Modal, TouchableOpacity, Text,SafeAreaView, PermissionsAndroid, View,ActivityIndicator, Image } from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import {COLORS, icons, images, SIZES} from "../constants";
import styles from '../styles.style';
//import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from './getDirections';
import {useLocation} from './watching';

const MapModal=({visible, setStartConfirmed, setStartLocation, startLocation, setEndConfirmed, setEndLocation, endLocation})=>{
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

    useEffect(() => {
        // This code will run whenever startLocation changes
        console.log("Start Location: ", startLocation);
    }, [startLocation]); // startLocation is a dependency

    useEffect(() => {
        // This code will run whenever startLocation changes
        console.log("End Location: ", endLocation);
    }, [endLocation]); // startLocation is a dependency

    const handleConfirmStart = () => {
        setStartConfirmed(true);
        setLocation(null)
    };
    const handleStartLocation = () => {
        console.log("Start Location: ", location);
        setStartLocation(location);
    }

    const handleConfirmEnd = () => {
        setEndConfirmed(true);
        setLocation(null)
    };
    const handleEndLocation = () => {
        console.log("End Location: ", location);
        setEndLocation(location);
    }

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
                        {location && (
                            <Marker 
                        coordinate={{latitude: location.latitude, longitude: location.longitude}}
                        title={loc_title}
                        />
                        )}

                        {/* Adding permanent marker for start location */}

                        {startLocation && (
                            <Marker
                                coordinate={{latitude: startLocation.latitude, longitude: startLocation.longitude}}
                                title={loc_title}
                        >
                                <View style={styles.container}>
                                    <Text style= {{backgroundColor: COLORS.lightWhite}}>Start Location</Text>
                                    <Image source={icons.loc_marker} style={{height: 20, width:20}}/>
                                </View>
                        </Marker>)}
                        {endLocation && (
                            <Marker
                                coordinate={{latitude: endLocation.latitude, longitude: endLocation.longitude}}
                                title={loc_title}
                        >
                                <View style={styles.container}>
                                    <Text style= {{backgroundColor: COLORS.lightWhite}}>End Location</Text>
                                    <Image source={icons.loc_marker} style={{height: 20, width:20}}/>
                                </View>
                        </Marker>
                        )}
                        {startLocation && endLocation && (
                            <MapViewDirections
                            origin={startLocation}
                            destination={endLocation}
                            apikey={"AIzaSyCHyKKAuKFd_17AiDIgAk9p07Yi6-2DJMc"} 
                            strokeWidth={3}
                            strokeColor="hotpink"
                            />
                        )}
                    </MapView>
                </View>
                {!startLocation && <TouchableOpacity style={styles.btnContainer} onPress={()=>{
                    handleConfirmStart()
                    handleStartLocation()}}>
                    <Text style={{fontSize: 20}}>Confirm Start</Text>
                </TouchableOpacity>}
                {startLocation && !endLocation && <TouchableOpacity style={styles.btnContainer} onPress={()=>{
                    handleConfirmEnd()
                    handleEndLocation()}}>
                    <Text style={{fontSize: 20}}>Confirm End</Text>
                </TouchableOpacity>}
                {endLocation && <TouchableOpacity style={styles.btnContainer} onPress={()=>{}}>
                    <Text style={{fontSize: 20}}>Begin walk</Text>
                </TouchableOpacity>}
            </SafeAreaView>
        </View>
    )
}
};

export default MapModal;