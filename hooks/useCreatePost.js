import { useReducer, useState } from 'react';
import {doPost} from '../services/request'

export const ADD_UPDATE_POST_ATTRIBUTE = 'ADD_UPDATE_POST_ATTRIBUTE';
export const ADD_UPDATE_POST_META_ATTRIBUTE = 'ADD_UPDATE_POST_META_ATTRIBUTE';
export const ADD_UPDATE_POST_INPUT_ERROR = 'ADD_UPDATE_POST_INPUT_ERROR';
export const CLEAR_ALL_POST_INPUT_ERROR = 'CLEAR_ALL_POST_INPUT_ERROR';
export const ADD_OR_UPDATE_SENDER_NAME_AND_EMAIL = 'ADD_OR_UPDATE_SENDER_NAME_AND_EMAIL';
export const ADD_OR_UPDATE_RECIPIENT_NAME_AND_EMAIL ='ADD_OR_UPDATE_RECIPIENT_NAME_AND_EMAIL'


export const addUpdatePostAttributeAction = (dispatch, payload = {}) => {
  dispatch({type: ADD_UPDATE_POST_ATTRIBUTE, payload})
}

export const addUpdatePostMetaAction = (dispatch, payload = {}) => {
  dispatch({type: ADD_UPDATE_POST_META_ATTRIBUTE, payload})
}

export const addUpdatePostInputErrorAction = (dispatch, payload = {}) => {
  dispatch({type: ADD_UPDATE_POST_INPUT_ERROR, payload})
}

export const clearAllPostInputErrorAction = (dispatch) => {
  dispatch({type: CLEAR_ALL_POST_INPUT_ERROR})
}

export const addOrUpdateSenderDetails = (dispatch) => {
  dispatch({type: ADD_OR_UPDATE_SENDER_NAME_AND_EMAIL, payload})
}

export const addOrUpdateRecipientDetails = (dispatch) => {
  dispatch({type: ADD_OR_UPDATE_RECIPIENT_NAME_AND_EMAIL, payload})
}

const reducer = (input, action) => {
  switch (action.type) {
    case ADD_UPDATE_POST_ATTRIBUTE:
      return {...input, ...action.payload};

    case ADD_UPDATE_POST_META_ATTRIBUTE:
      const postMeta = {...input.postMeta, ...action.payload};
      return {...input, postMeta};

    case ADD_UPDATE_POST_INPUT_ERROR:
      const error = {...input.error, ...action.payload};
      return {...input, error};

    case CLEAR_ALL_POST_INPUT_ERROR:
      return {...input, error: {}};
    
    case ADD_OR_UPDATE_RECIPIENT_NAME_AND_EMAIL:
      return input

    default:
      return input;
  }
};

const postInitial = {
  commentStatus: 'Open',
  postType: 'act',
};

const bisooInitial = {
  commentStatus: 'Closed',
  postType: 'bisoo',
};

const otherData = {
  author: 77,
  content: '',
  postStatus: 'Publish',
  postName: '',
  postMeta: {
    postanonymously: 'No'
  },
  error: {},
};

const initialStateByType = {
  bisoo: {
    ...bisooInitial,
    ...otherData,
  },
  post: {
    ...postInitial,
    ...otherData,
  },
};

export const useCreatePost = (type, initialData = {}) => {
  const [status, setStatus] = useState(0)
  const [state, dispatch] = useReducer(reducer, {
    ...initialStateByType[type],
    ...initialData,
  });

  const addUpdatePost = async() => {
    try {
      setStatus(1)
      const meta = state.postMeta
      delete state.error
      console.log(
        {
          ...state,
          postMeta: JSON.stringify(meta)
  
        }
      )
      await doPost('create-post', {
        ...state,
        postMeta: JSON.stringify(meta)

      })
      setStatus(2)
    } catch (error) {
      console.log(error)
    }
  }

  return {state, dispatch, addUpdatePost, status};
};
