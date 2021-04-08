import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import {createTask} from '../flux/actions/BoardActions';
import {connect} from 'react-redux'

class AddTask extends Component {
    state = {
        // This boolean controls the visibility of the component
        isCreateTask: false,
        newTaskName: "",
        // This variable keeps track of the parent board
        boardID: this.props.boardid
    }

    handleClick = () => {
        // This makes the form visible
        this.setState({isCreateTask: true})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTask(this.state.boardID, this.state.newTaskName);
        //This closes the form and resets the newTaskName state variable
        this.setState({newTaskName: ""})
        this.setState({isCreateTask: false})
    }

    handleChange = (e) => {
        //This updates the newTaskName state variable whenever there is an edit in the input field
        this.setState({ [e.target.name] : e.target.value })
    }

    handleCancel = () => {
        //This closes the form and resets the newTaskName state variable
        this.setState({newTaskName: ""})
        this.setState({isCreateTask: false})
    }

    render() {
        return (
            <div>
                {/* The Ternary Operator handles the form visibility */}
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
                                    required
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