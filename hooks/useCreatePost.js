import { useReducer, useState } from 'react';
import {doPost} from '../services/request'

export const ADD_UPDATE_POST_ATTRIBUTE = 'ADD_UPDATE_POST_ATTRIBUTE';
export const ADD_UPDATE_POST_META_ATTRIBUTE = 'ADD_UPDATE_POST_META_ATTRIBUTE';
export const ADD_UPDATE_POST_INPUT_ERROR = 'ADD_UPDATE_POST_INPUT_ERROR';
export const CLEAR_ALL_POST_INPUT_ERROR = 'CLEAR_ALL_POST_INPUT_ERROR';

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
      console.log(2)
    } catch (error) {
      setStatus(3)
      console.log(error)
    }
  }

  return {state, dispatch, addUpdatePost, status};
};
