import React, { useEffect, useState } from 'react';
import { Modal, TouchableOpacity, Text,SafeAreaView, PermissionsAndroid, View,ActivityIndicator, Image, Vibration } from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import {COLORS, icons, images, SIZES} from "../constants";
import styles from '../styles.style';
//import Geolocation from '@react-native-community/geolocation';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import getDirections from './getDirections';
import useLocation from './watching';
import GOOGLE_MAPS_API_KEY from './api_key';

const MapModal=({visible, setStartConfirmed, setStartLocation, startLocation, setEndConfirmed, setEndLocation, endLocation, walking, setWalking})=>{
    const [location, setLocation] = useState(null);
    const [loc_title, setLocTitle] = useState("Current Location");
    const [isLoading, setIsLoading] = useState(true);
    const [directions, setDirections] = useState(null);

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

    
    //Watching location
    useEffect(() => {
        console.log("In useEffect for walking")
        let locationSubscription;

        const startWatching = async () => {
            console.log("Running startWatching ...")
            try {
                const {granted} = await Location.requestForegroundPermissionsAsync();
                if (!granted) {
                    throw new Error('Location permission not granted');
                }
                locationSubscription = await Location.watchPositionAsync({
                    accuracy: Location.Accuracy.BestForNavigation,
                    timeInterval: 10000,
                    distanceInterval: 10
                }, (location) => {
                    setLocation(location.coords);
                    if (walking) {
                        setStartLocation(location.coords);
                    }
                    getDirections(location.coords, endLocation).then(setDirections);
                });
            }
            catch (e) {
                console.error(e);
            }
        }
        startWatching();

        return () => {
            if (locationSubscription) {
                locationSubscription.remove();
            }
        }
    }, [walking])

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

    const handleWalk = ()=>{
        setWalking(true);
        console.log("Before walking")
        // location=useLocation();
        // console.log("Walking: ", location);
        // getDirections(location.coords, endLocation).then(setDirections);
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
                        {!walking && location && (
                            <Marker 
                        coordinate={{latitude: location.latitude, longitude: location.longitude}}
                        title={loc_title}
                        />
                        )}

                        {/* Adding permanent marker for start location */}

                        {!walking && startLocation && (
                            <Marker
                                coordinate={{latitude: startLocation.latitude, longitude: startLocation.longitude}}
                                title={loc_title}
                        >
                                <View style={styles.container}>
                                    <Text style= {{backgroundColor: COLORS.lightWhite}}>Start Location</Text>
                                    <Image source={icons.loc_marker} style={{height: 20, width:20}}/>
                                </View>
                        </Marker>)}
                        {walking && startLocation && (
                            <Marker
                                coordinate={{latitude: startLocation.latitude, longitude: startLocation.longitude}}
                                title={loc_title}
                        >
                                <View style={styles.container}>
                                    <Text style= {{backgroundColor: COLORS.lightWhite}}>Current Location</Text>
                                    <Image source={icons.walk} style={{height: 20, width:20}}/>
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
                            apikey={GOOGLE_MAPS_API_KEY} 
                            strokeWidth={3}
                            strokeColor="red"
                            mode="WALKING"
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
                {endLocation && !walking && <TouchableOpacity style={styles.btnContainer} onPress={()=>{
                    //getDirections(startLocation, endLocation)
                    handleWalk()
                    }}>
                    <Text style={{fontSize: 20}}>Begin walk</Text>
                </TouchableOpacity>}
                
            </SafeAreaView>
        </View>
    )
}
};

export default MapModal;