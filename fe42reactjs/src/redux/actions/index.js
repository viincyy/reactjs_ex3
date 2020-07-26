import { DELETE_USER, USER_EDIT } from "./../constants/ActionType";

export const actDeleteUser = id => {
  return {
    type: DELETE_USER,
    id //id: id
  };
};

export const actUserEdit = user => {
  return {
    type: USER_EDIT,
    user: user
  };
};
