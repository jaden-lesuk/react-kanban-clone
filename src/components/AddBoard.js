import React, { Component } from 'react';
import { Button, Card} from 'react-bootstrap';
import {createBoard} from '../flux/actions/BoardActions';
import {connect} from 'react-redux'

class AddBoard extends Component {
    state = {
        // This boolean controls the visibility of the component
        isCreateBoard: false,
        newBoardName: ""
    }

    handleClick = () => {
        // This makes the form visible
        this.setState({isCreateBoard: true})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //This calls the CreateBoard Redux Action
        this.props.createBoard(this.state.newBoardName);
        //This closes the form and resets the newBoardName state variable
        this.setState({newBoardName: ""})
        this.setState({isCreateBoard: false})
    }

    handleChange = (e) => {
        //This updates the newBoardName state variable whenever there is an edit in the input field
        this.setState({ [e.target.name] : e.target.value })
    }

    handleCancel = () => {
        //This closes the form and resets the newBoardName state variable
        this.setState({newBoardName: ""})
        this.setState({isCreateBoard: false})
    }

    render() {
        return (
            <div style={this.props.style}>
            {/* The Ternary Operator handles the form visibility */}
            {!this.state.isCreateBoard? 
                <div><Button onClick={this.handleClick} size="lg" block>Add Board</Button></div>:
                <Card><Card.Body>
                    <form  onSubmit={this.handleSubmit} >
                        <div className="mb-3">
                            <label className="form-label font-weight-bold" >Name:</label>
                            <input 
                                    type = "text"
                                    name = "newBoardName"
                                    className="form-control"
                                    placeholder = "Add the name ..."
                                    value = {this.state.newBoardName}
                                    onChange = { this.handleChange }
                                    required
                                />
                        </div>
                        <Button variant="outline-danger" onClick={this.handleCancel} style={{float: 'left'}}>Cancel</Button>
                        <Button variant="outline-primary" type="submit" style={{float: 'right'}}>Add</Button>

                    </form>
                    </Card.Body></Card>
            }
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})

export default connect(mapStateToProps, {createBoard})(AddBoard)