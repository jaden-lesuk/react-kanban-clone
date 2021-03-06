import React, { Component } from 'react';
import { Card, Button, ButtonGroup} from 'react-bootstrap';
import Task from './Task';
import {connect} from 'react-redux';
import{ renameBoard, deleteBoard, clearBoard, transferTask } from '../flux/actions/BoardActions'
import {Trash, Eraser, FileEarmarkMinus} from 'react-bootstrap-icons';
import Swal from 'sweetalert2'
import AddTask from './AddTask'
import { DropTarget } from 'react-dnd'

//This is used to identify a matching droppable/draggable class
const Types = {
    ITEM: 'task'
}

// This makes the component droppable
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}   


class Board extends Component {
    handleChangeName = async(id,oldName) => {
        // This calls an alert to get user input
        const { value: name } = await Swal.fire({
            title: 'Input new name',
            input: 'text',
            inputLabel: `New name for board: ${oldName}`,
            inputPlaceholder: 'Board Name',
            showCancelButton: true,
            inputValidator: (value) => {
                return !value && 'You need to write something!'
            }
        })
        //Checks if empty
        if (name) {
            this.props.renameBoard(id, name)
        }
    }

    handleClear = (id) => {
        this.props.clearBoard(id)
    }

    handleDelete = (id) => {
        this.props.deleteBoard(id)
    }

    render() {
        const {id, name, tasks} =this.props.column
        const { connectDropTarget } = this.props

        return connectDropTarget(
            <div style={this.props.style}>
                <Card>
                    <Card.Header>
                        <strong>{name}</strong>
                        <ButtonGroup style={{float: 'right'}}>
                            {/* Added tooltips for user friendliness */}
                            <Button variant="success" onClick={this.handleChangeName.bind(this, id, name)} data-bs-toggle="tooltip" data-bs-placement="top" title="Rename Board"><Eraser/></Button>
                            <Button variant="primary" onClick={this.handleClear.bind(this, id)} data-bs-toggle="tooltip" data-bs-placement="top" title="Clear Board"><FileEarmarkMinus/></Button>
                            <Button variant="danger" onClick={this.handleDelete.bind(this, id)} data-bs-toggle="tooltip" data-bs-placement="top" title="Delete Board"><Trash/></Button>
                        </ButtonGroup>
                        
                    </Card.Header>
                    <Card.Body>
                    {tasks.map( task => (<Task key={task.id} task={task}  boardid={id}/>))}
                    </Card.Body>
                    <Card.Footer>
                        <AddTask boardid={id}/>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})

//This handles the draggable item once its dropped
const spec = {
    drop(props, monitor, component){
        const item = monitor.getItem()
        props.transferTask(item, props.column.id)
        return item;
        
    }
}

//This uses the DropTraget super component to make it droppable 
Board = DropTarget(Types.ITEM, spec, collect)(Board)
export default connect(mapStateToProps, {renameBoard, clearBoard, deleteBoard, transferTask})(Board)