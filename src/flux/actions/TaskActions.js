import { CREATE_TASK } from './types';
import { v4 as uuidv4 } from 'uuid';

export const createTask = (boardId, title) => dispatch => {
    const task = {
        id: uuidv4(),
        title,
        boardId
    }
    dispatch({type: CREATE_TASK, payload: task})
}