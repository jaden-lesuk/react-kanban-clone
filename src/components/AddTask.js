import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import {createTask} from '../flux/actions/BoardActions';
import {connect} from 'react-redux'

class AddTask extends Component {
    state = {
        isCreateTask: false,
        newTaskName: "",
        boardID: this.props.boardid
    }

    handleClick = () => {
        this.setState({isCreateTask: true})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTask(this.state.boardID, this.state.newTaskName);
        this.setState({newTaskName: ""})
        this.setState({isCreateTask: false})
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    handleCancel = () => {
        this.setState({newTaskName: ""})
        this.setState({isCreateTask: false})
    }

    render() {
        return (
            <div>
                {!this.state.isCreateTask? 
                <div><Button onClick={this.handleClick} block>Add Task</Button></div>:
                    <form  onSubmit={this.handleSubmit} >
                        <div className="mb-3">
                            <label className="form-label font-weight-bold" >Name:</label>
                            <input 
                                    type = "text"
                                    name = "newTaskName"
                                    className="form-control"
                                    placeholder = "Add the Title ..."
                                    value = {this.state.newTaskName}
                                    onChange = { this.handleChange }
                                />
                        </div>
                        <Button variant="danger" onClick={this.handleCancel} style={{float: 'left'}}>Cancel</Button>
                        <Button variant="primary" type="submit" style={{float: 'right'}}>Add</Button>

                    </form>

            }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})

export default connect(mapStateToProps, {createTask})(AddTask)