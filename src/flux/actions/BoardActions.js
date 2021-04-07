import { CREATE_BOARD, RENAME_BOARD, DELETE_BOARD, CLEAR_BOARD } from './types';
import { v4 as uuidv4 } from 'uuid';

export const createBoard = (name) => dispatch => {
    const board = {
        id: uuidv4(),
        name,
        tasks: []
    }
    dispatch({type: CREATE_BOARD, payload: board})
}

export const renameBoard = (boardId ,newName) => dispatch => {
    const board = {
        boardId,
        //remember to change this
        newName: "CHANGED NAME"
    }
    dispatch({type: RENAME_BOARD, payload: board})
}

export const clearBoard = (boardId) => dispatch => {
    dispatch({type: CLEAR_BOARD, payload: boardId})
}

export const deleteBoard = (boardId) => dispatch => {
    dispatch({type: DELETE_BOARD, payload: boardId})
}