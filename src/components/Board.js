import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Task from './Task';
import {connect} from 'react-redux';
import{ renameBoard } from '../flux/actions/BoardActions'

class Board extends Component {
    handleChangeName = (id, name) => {
        this.props.renameBoard(id, name)
    }

    render() {
        const {id, name, tasks} =this.props.column

        return (
            <div style={this.props.style}>
                <Card>
                    <Card.Header>
                        {name}
                        <Button onClick={this.handleChangeName.bind(this, id, name)}>E</Button>
                    </Card.Header>
                    <Card.Body>
                    {tasks.map( task => (<Task key={task.id} task={task} />))}
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="secondary" disabled block>Add Task</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})

export default connect(mapStateToProps, {renameBoard})(Board)