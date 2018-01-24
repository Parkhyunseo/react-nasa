import axios from 'axios';

export function getAPOD(date = ''){
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=pUBZxFBb57TIeezYNolynUJqNjO46NsKjU9iGsIl&date=${date}`);
}