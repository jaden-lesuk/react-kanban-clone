import React, { Component } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import Task from './Task';
import {connect} from 'react-redux';
import{ renameBoard, deleteBoard, clearBoard } from '../flux/actions/BoardActions'
import {Trash, Eraser, FileEarmarkMinus} from 'react-bootstrap-icons';
import Swal from 'sweetalert2'
import AddTask from './AddTask'

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

        return (
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
                    {tasks.map( task => (<Task key={task.id} task={task} />))}
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

export default connect(mapStateToProps, {renameBoard, clearBoard, deleteBoard})(Board)