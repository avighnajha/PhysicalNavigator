import axios from 'axios';

const getDirections = async (startLocation, endLocation) => {
    const GOOGLE_MAPS_API_KEY = "AIzaSyCHyKKAuKFd_17AiDIgAk9p07Yi6-2DJMc"
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLocation.latitude},${startLocation.longitude}&destination=${endLocation.latitude},${endLocation.longitude}&key=${GOOGLE_MAPS_API_KEY}`
    const response = await axios.get(url)
    const steps = response.data.routes[0].legs[0].steps;

    const directions = steps.map(step => ({
        instruction:step.html_instructions.replace(/<[^>]*>?/g, ''),
        distance: step.distance.text,
    }))
    console.log(directions)
    return directions;
}

export default getDirections;