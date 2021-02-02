import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000/'
})

export const fileAPI = {
    downloadFile() {
        return   instance.post('download');
    },
    setFile() {
        return   instance.get('files');
    },
}