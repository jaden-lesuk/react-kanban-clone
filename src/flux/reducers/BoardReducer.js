import { CREATE_BOARD, RENAME_BOARD, DELETE_BOARD } from '../actions/types';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    boards: [
        {id: uuidv4(), name: 'TO DO', tasks: []},
        {id: uuidv4(), name: 'IN PROGRESS', tasks: []}],
}

export default function Reducer( state=initialState, action ) {
    switch (action.type) {
        case CREATE_BOARD:
            return {
                ...state,
                boards: [...state.boards, action.payload]
            };
        case RENAME_BOARD:
            return {
                ...state
            };
        case DELETE_BOARD:
            return {
                ...state
            };
        default:
            return state;
    }
}