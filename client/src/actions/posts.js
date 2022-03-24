import * as api from '../api';
import { actions } from './actions.js';

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: actions.fetchAll, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
