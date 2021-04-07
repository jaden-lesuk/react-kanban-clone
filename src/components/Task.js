import React, { Component } from 'react';
import {Card, Button, ButtonGroup} from 'react-bootstrap';
import {Trash, Eraser} from 'react-bootstrap-icons';
import {connect} from 'react-redux';
import{ deleteTask, editTask } from '../flux/actions/BoardActions'
import Swal from 'sweetalert2'

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

        return (
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

export default connect(mapStateToProps, {deleteTask, editTask})(Task)