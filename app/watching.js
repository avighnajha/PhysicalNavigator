import {useState, useEffect} from 'react';
import * as Location from 'expo-location';

const useLocation = ()=>{
    const [location, setLocation] = useState(null);

    const startWatchingLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
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
            (location) => {
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                })
            }
        )
    }
    useEffect(() => {
        startWatchingLocation();
    }, [])
    return location;
}

export default useLocation;