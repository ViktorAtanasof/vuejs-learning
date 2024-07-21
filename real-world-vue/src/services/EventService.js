import axios from "axios"

const apiClient = axios.create({
    baseURL: 'https://themealdb.com/api/json/v1/1',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'applications/json',
    },
});

export default {
    getEvents() {
        return apiClient.get('/filter.php?i=avocado')
    }
}