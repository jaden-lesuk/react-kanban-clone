import React, { Component } from 'react';
import {Card, Button, ButtonGroup} from 'react-bootstrap';
import {Trash, Eraser} from 'react-bootstrap-icons';
import {connect} from 'react-redux';
import{ deleteTask, editTask } from '../flux/actions/BoardActions';
import Swal from 'sweetalert2';
import { DragSource } from 'react-dnd';

//This is used to identify a matching droppable/draggable class
const Types = {
    ITEM: 'task'
}

//This represents the Draggable task as a simple object
const itemSource = {
    beginDrag(props, monitor) {
        const droppedTask = {task: props.task, prevBoard: props.boardid}
        return droppedTask 
    }
}

// This makes the component draggable
function collect(connect, monitor) {
    return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
    }
}

class Task extends Component {
    handleDelete = (id) => {
        this.props.deleteTask(id, this.props.boardid)
    }

    handleEdit = async(id, oldTitle) => {
        // This calls an alert to get user input
        const { value: title } = await Swal.fire({
            title: 'Input new title',
            input: 'text',
            inputLabel: `New title for task: ${oldTitle}`,
            inputPlaceholder: 'Task Title',
            showCancelButton: true,
            inputValidator: (value) => {
                return !value && 'You need to write something!'
            }
        })
        //Checks if empty
        if(title){
            this.props.editTask(id, this.props.boardid, title)
        }
    }

    render() {
        const {id, title} =this.props.task

        const {connectDragSource} = this.props

        return connectDragSource(
            <div style={styles.TaskStyle}>
                <Card>
                    <Card.Body>
                        {title}
                        <ButtonGroup style={{float: 'right'}} size="sm">
                            <Button variant="success" onClick={this.handleEdit.bind(this, id, title)}><Eraser/></Button>
                            <Button variant="danger" onClick={this.handleDelete.bind(this, id)}><Trash/></Button>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const styles = {
    TaskStyle: {
        marginTop: '1vh',
        marginBottom: '1vh',
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})

//This uses the DragSource super component to make it draggable 
Task = DragSource(Types.ITEM, itemSource, collect)(Task)
export default connect(mapStateToProps, {deleteTask, editTask})(Task)