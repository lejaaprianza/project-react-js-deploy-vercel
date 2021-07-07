import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAIL = "GET_USERS_DETAIL";
export const POST_USERS_CREATE = "POST_USERS_CREATE";
export const PUT_USERS_EDIT = "PUT_USERS_EDIT";

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/lejaaprianza/project-react-js/users"
      )
      .then(function (response) {
        // handle success
        dispatch({
          type: GET_USERS_LIST,
          payload: { data: response.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error.response.data.data);
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.response.data.data,
          },
        });
      });
  };
};
export const getUsersDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/lejaaprianza/project-react-js/users/" +
          id
      )
      .then(function (response) {
        // handle success
        dispatch({
          type: GET_USERS_DETAIL,
          payload: { data: response.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.response.data.data,
          },
        });
      });
  };
};
export const postUserCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "https://my-json-server.typicode.com/lejaaprianza/project-react-js/users",
        data
      )
      .then(function (response) {
        console.log(response);
        // handle success
        dispatch({
          type: POST_USERS_CREATE,
          payload: { data: response.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error.response.status);
        dispatch({
          type: POST_USERS_CREATE,
          payload: {
            data: false,
            errorMessage: error.response.status.toString(),
          },
        });
      });
  };
};
export const putUserUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        "https://my-json-server.typicode.com/lejaaprianza/project-react-js/users/" +
          id,
        data
      )
      .then(function (response) {
        console.log(response);
        // handle success
        dispatch({
          type: PUT_USERS_EDIT,
          payload: { data: response.data, errorMessage: false },
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error.response.status);
        dispatch({
          type: PUT_USERS_EDIT,
          payload: {
            data: false,
            errorMessage: error.response.status.toString(),
          },
        });
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(
        "https://my-json-server.typicode.com/lejaaprianza/project-react-js/users/" +
          id
      )
      .then(function (response) {
        console.log(response);
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error.response.status);
      });
  };
};

export const deleteDataUser = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload: { data: false, errorMessage: false },
    });
    dispatch({
      type: POST_USERS_CREATE,
      payload: { data: false, errorMessage: false },
    });
  };
};
