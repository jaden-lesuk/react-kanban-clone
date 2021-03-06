import { CREATE_BOARD, RENAME_BOARD, DELETE_BOARD , CLEAR_BOARD, CREATE_TASK, EDIT_TASK, DELETE_TASK, TRANSFER_TASK} from '../actions/types';
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
                // Looks for specific board before renaming it
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
                //Clears the board's tasks array
                boards: state.boards.map(board => board.id === action.payload
                    ? Object.assign(board, {tasks: []})
                    : board )
            };

        case CREATE_TASK:
            return {
                ...state,
                boards: state.boards.map(board => board.id === action.payload.boardId
                    ? Object.assign(board, {tasks: [...board.tasks, {id: action.payload.id, title: action.payload.title} ]})
                    : board )
            };

        case EDIT_TASK:
            return {
                ...state,
                // Looks for specific task in specific board the updates its title
                boards: state.boards.map(board => board.id === action.payload.boardId
                    ? Object.assign(board, {tasks: [...board.tasks.filter(task => task.id === action.payload.id ?
                        Object.assign(task, {title: action.payload.newTitle})
                        : task ) ]})
                    : board ),
            };


        case DELETE_TASK:
            return {
                ...state,
                boards: state.boards.map(board => board.id === action.payload.boardId
                    ? Object.assign(board, {tasks: [...board.tasks.filter(task => task.id !== action.payload.id) ]})
                    : board )
            };

        case TRANSFER_TASK:
            const {transTask, prevBoardId, newBoardId} = action.payload
            if (prevBoardId === newBoardId){
                // Does nothing if the source and destination are the same
                return state;
            }

            return{
                ...state,
                // Delete from previos board
                boards: state.boards.map(board => board.id === prevBoardId
                    ? Object.assign(board, {tasks: [...board.tasks.filter(task => task.id !== transTask.id) ]})
                    : board ),
                // Adds to new board
                newBoards: state.boards.map(board => board.id === newBoardId
                    ? Object.assign(board, {tasks: [...board.tasks, {id: transTask.id, title: transTask.title} ]})
                    : board )
                }
            
        default:
            return state;
    }
}