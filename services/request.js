import Axios, {AxiosResponse, AxiosError} from 'axios';
import { END_POINT } from '../constants';
import { updateRawData } from '../Reducers/actions';
import {getServerURL, getRequestedHeader} from '../utils';

export const  doGet = async (url) => {
    try {
        updateRawData({showLoader:true})
        const {data} = await Axios.get(`${END_POINT}${url}`, getRequestedHeader())
        updateRawData({showLoader:false})

        return data;
    } catch (error) {
        updateRawData({showLoader:false})

        console.warn(error)
    }
}

export const doPost = (url, data) => {
    updateRawData({showLoader:true})

    return Axios.post(`${END_POINT}${url}`, data, getRequestedHeader())
        .then((response) => {
            updateRawData({showLoader:false})

            return response.data;
 
        })
        .catch((error) => {
            updateRawData({showLoader:false})

            throw error;
            
        });
};
