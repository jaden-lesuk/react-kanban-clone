import { CREATE_BOARD, RENAME_BOARD, DELETE_BOARD , CLEAR_BOARD} from '../actions/types';
import { v4 as uuidv4 } from 'uuid';

// Board Schema {id: uuidv4(), name: 'TO DO', tasks: []}
// Task Schema {id: uuidv4(), title: 'Add Button'}

const initialState = {
    boards: [
        {id: uuidv4(), name: 'TO DO', tasks: [{id: uuidv4(), title: 'Add Button'}, {id: uuidv4(), title: 'Add ToolTip'}]},
        {id: uuidv4(), name: 'IN PROGRESS', tasks: [{id: uuidv4(), title: 'Add Header'}, {id: uuidv4(), title: 'Add Footer'}]}],
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
                ...state,
                boards: state.boards.map(board => board.id === action.payload.boardId
                    ? Object.assign(board, {name: action.payload.newName})
                    : board )
            };

        
        case DELETE_BOARD:
            return {
                ...state,
                boards: [...state.boards.filter(board => board.id !== action.payload)]
            };

        case CLEAR_BOARD:
            return {
                ...state,
                boards: state.boards.map(board => board.id === action.payload
                    ? Object.assign(board, {tasks: []})
                    : board )
            };

        default:
            return state;
    }
}