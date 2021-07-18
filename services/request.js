import Axios, {AxiosResponse, AxiosError} from 'axios';
import { END_POINT } from '../constants';
import {getServerURL, getRequestedHeader} from '../utils';

export const  doGet = async (url) => {
    try {
        const {data} = await Axios.get(`${END_POINT}${url}`, getRequestedHeader())

        return data;
    } catch (error) {
        console.warn(error)
    }
}

export const doPost = (url, data) => {

    return Axios.post(`${END_POINT}${url}`, data, getRequestedHeader())
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};
