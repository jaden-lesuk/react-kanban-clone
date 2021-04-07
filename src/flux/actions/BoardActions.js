import { CREATE_BOARD, RENAME_BOARD, DELETE_BOARD } from './types';

export const createBoard = (name) => dispatch => {
    dispatch({type: CREATE_BOARD, payload: name})
}
