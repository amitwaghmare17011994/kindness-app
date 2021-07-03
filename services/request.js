import Axios, {AxiosResponse, AxiosError} from 'axios';
import {getServerURL, getRequestedHeader} from '../utils';

export const  doGet = async (url) => {
    try {
        const {data} = await Axios.get('http://192.168.43.3:5000/' + url, getRequestedHeader())

        return data;
    } catch (error) {
        console.warn(error)
    }
}

export const doPost = (url, data) => {

    return Axios.post('http://192.168.43.3:5000/' + url, data, getRequestedHeader())
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};
