import React, { Component } from 'react';
import {Card} from 'react-bootstrap'

export default class Task extends Component {
    render() {
        const {title} =this.props.task

        return (
            <div style={styles.TaskStyle}>
                <Card>
                    <Card.Body>
                        <Card.Text>{title}</Card.Text>
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