import { CREATE_BOARD, RENAME_BOARD, DELETE_BOARD } from '../actions/types';

const initialState = {
    boards: ['TO DO', 'IN PROGRESS'],
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