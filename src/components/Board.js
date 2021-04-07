import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import Task from './Task';

export default class Board extends Component {
    render() {
        const {name, tasks} =this.props.board

        return (
            <div style={this.props.style}>
                <Card>
                    <Card.Header>{name}</Card.Header>
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