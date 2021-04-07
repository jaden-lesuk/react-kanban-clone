import React, { Component } from 'react';
import {Card, Button, ButtonGroup} from 'react-bootstrap';
import {Trash, Eraser} from 'react-bootstrap-icons';
import {connect} from 'react-redux';
import{ deleteTask } from '../flux/actions/BoardActions'

class Task extends Component {
    handleDelete = (id) => {
        this.props.deleteTask(id, this.props.boardid)
    }
    render() {
        const {id, title} =this.props.task

        return (
            <div style={styles.TaskStyle}>
                <Card>
                    <Card.Body>
                        {title}
                        {/* {this.props.boardid} */}
                        <ButtonGroup style={{float: 'right'}} size="sm">
                            <Button variant="success" ><Eraser/></Button>
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

export default connect(mapStateToProps, {deleteTask})(Task)