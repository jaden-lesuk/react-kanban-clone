import React, { Component } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import Task from './Task';
import {connect} from 'react-redux';
import{ renameBoard, deleteBoard, clearBoard } from '../flux/actions/BoardActions'
import {Trash, Eraser, FileEarmarkMinus} from 'react-bootstrap-icons';
import Swal from 'sweetalert2'
import AddTask from './AddTask'
import { DropTarget } from 'react-dnd'

const Types = {
    ITEM: 'task'
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget()
    }
}   


class Board extends Component {
    handleChangeName = async(id,oldName) => {
        const { value: name } = await Swal.fire({
            title: 'Input new name',
            input: 'text',
            inputLabel: `New name for board: ${oldName}`,
            inputPlaceholder: 'Board Name'
        })
        this.props.renameBoard(id, name)
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
        // console.log(connectDropTarget)

        return connectDropTarget(
            <div style={this.props.style}>
                <Card>
                    <Card.Header>
                        <strong>{name}</strong>
                        <ButtonGroup style={{float: 'right'}}>
                            <Button variant="success" onClick={this.handleChangeName.bind(this, id, name)}><Eraser/></Button>
                            <Button variant="primary" onClick={this.handleClear.bind(this, id)}><FileEarmarkMinus/></Button>
                            <Button variant="danger" onClick={this.handleDelete.bind(this, id)}><Trash/></Button>
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

const spec = {
    drop(props, monitor, component){
        const item = monitor.getItem()
        console.log(item);

        // console.log(props.column.id)

        // props.column.tasks.push(item)
        return item;
        
    }
}

Board = DropTarget(Types.ITEM, spec, collect)(Board)
export default connect(mapStateToProps, {renameBoard, clearBoard, deleteBoard})(Board)