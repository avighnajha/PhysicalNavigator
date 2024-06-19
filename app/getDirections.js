import axios from 'axios';
import GOOGLE_MAPS_API_KEY from './api_key';

const getDirections = async (startLocation, endLocation) => {
    //const GOOGLE_MAPS_API_KEY = "AIzaSyA-_pnN6vlkJl6LD-S6dWxSqcWk_YP-7Q8"
    console.log("in getDir")
        const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation.latitude},${startLocation.longitude}&destination=${endLocation.latitude},${endLocation.longitude}&key=${GOOGLE_MAPS_API_KEY}`
    //console.log("response")
    const response = await axios.get(url)
    //console.log(response)
    const steps = response.data.routes[0].legs[0].steps;
    const directions = steps.map(step => ({
        instruction:step.html_instructions.replace(/<[^>]*>?/g, ''),
        distance: step.distance.text,
    }))
    console.log(directions)
    return directions[0];
}

export default getDirections;