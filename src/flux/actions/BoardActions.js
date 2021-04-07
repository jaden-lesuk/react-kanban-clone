import { CREATE_BOARD, RENAME_BOARD, DELETE_BOARD } from './types';
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
    console.log("HIT")
    const board = {
        boardId,
        //remember to change this
        newName: "Changed Name"
    }
    dispatch({type: RENAME_BOARD, payload: board})
}