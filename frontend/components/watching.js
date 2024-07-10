import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import getDirections from './getDirections';

const useLocation = ()=>{
    const [location, setLocation] = useState(null);

    const startWatchingLocation = async () => {
        console.log("inside startWatchingLocation")
        let {status} = await Location.requestForegroundPermissionsAsync();
        console.log("Location in useloc: ", location)
        if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
        }

        await Location.watchPositionAsync(
            {
                accuracy:Location.Accuracy.High,
                timeInterval: 1000,
                distanceInterval: 10
            },
            async (location) => {
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                })
                //const direction = await getDirections(location, endLocation);
            }
        )
    }
    useEffect(() => {
        startWatchingLocation();
    }, [])
    return location;
}

export default useLocation;