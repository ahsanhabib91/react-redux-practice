import jsonPlaceholder from "../apis/jsonPlaceholder";

export const selectBook = book => {
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
};

/**
 * store.dispatch() expectes expects a plain JS object to be returned as an action from action creator function(fetcPosts() in such case).
 * But due to using [async await], action creator function is returning request_object->jsongPlaceholder.get("/posts") as an action in one case.
 * Therefore need to use redux-thunk in order to get a plain JS object as return value or action from action creator function
 *  */
export const fetcPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data
    });
  };
};

export const fetchUser = id => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};

/**
 * To write data to reduxStore -> we call Action Creator
 * To read data from reduxStore -> we call mapStateToProps
 * Actions -> function() => (type, paylaod) {}
 * Synchronous action creator -> Instanly returns an action with data ready to go
 * Asynchronous action creator ->
 * By adding Redux-Thunk, rules of action creator cahnged. Action-Creator does not
 * always need to return plain object. It also can return a function instead. For funciton, it will get dispatch, getState as parameter
 */
