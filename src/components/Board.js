import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export default class Board extends Component {
    render() {
        const {name} =this.props.board

        return (
            <div style={this.props.style}>
                <Card>
                    <Card.Header>{name}</Card.Header>
                    <Card.Body>
                        Tasks go here
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" size="md" block>Add Task</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}
