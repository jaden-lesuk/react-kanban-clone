import { CREATE_BOARD, RENAME_BOARD, DELETE_BOARD, CLEAR_BOARD, CREATE_TASK, EDIT_TASK, DELETE_TASK, TRANSFER_TASK} from './types';
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
        newName,
    }
    dispatch({type: RENAME_BOARD, payload: board})
}

export const clearBoard = (boardId) => dispatch => {
    dispatch({type: CLEAR_BOARD, payload: boardId})
}

export const deleteBoard = (boardId) => dispatch => {
    dispatch({type: DELETE_BOARD, payload: boardId})
}

export const createTask = (boardId, title) => dispatch => {
    const task = {
        id: uuidv4(),
        title,
        boardId
    }
    dispatch({type: CREATE_TASK, payload: task})
}

export const editTask = (id, boardId, newTitle) => dispatch => {
    const task = {
        id,
        boardId,
        newTitle
    }
    dispatch({type: EDIT_TASK, payload: task})
}

export const deleteTask = (id, boardId) => dispatch => {
    const task = {
        id,
        boardId
    }
    dispatch({type: DELETE_TASK, payload: task})
}

export const transferTask = (oldTask, newBoardId) => dispatch => {
    const transferTask = {
        transTask: oldTask.task,
        prevBoardId: oldTask.prevBoard,
        newBoardId
    }
    dispatch({type: TRANSFER_TASK, payload: transferTask})
}