import React, { Component } from 'react';
import {Card, Button, ButtonGroup} from 'react-bootstrap';
import {Trash, Eraser} from 'react-bootstrap-icons';
import {connect} from 'react-redux';
import{ deleteTask, editTask } from '../flux/actions/BoardActions';
import Swal from 'sweetalert2';
import { DragSource } from 'react-dnd';

const Types = {
    ITEM: 'task'
}

const itemSource = {
    beginDrag(props, monitor) {
        console.log(props.boardid)
        // props.deleteTask(props.task.id, props.boardid)
        const droppedTask = {task: props.task, prevBoard: props.boardid}
        return droppedTask 
    },
    // endDrag(props, monitor) {
    //     // console.log(props.boardid)
    //     if(monitor.didDrop()){
    //         props.deleteTask(props.task.id, props.boardid)
    //     }
        
    // }
}

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
        const { value: title } = await Swal.fire({
            title: 'Input new title',
            input: 'text',
            inputLabel: `New title for task: ${oldTitle}`,
            inputPlaceholder: 'Task Title'
        })
        this.props.editTask(id, this.props.boardid, title)
    }

    render() {
        const {id, title} =this.props.task

        const { isDragging, connectDragSource, src } = this.props

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
        // opacity: isDragging ? 0.5 : 1,
        marginTop: '1vh',
        marginBottom: '1vh',
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})

Task = DragSource(Types.ITEM, itemSource, collect)(Task)
export default connect(mapStateToProps, {deleteTask, editTask})(Task)