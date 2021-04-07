import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import {createBoard} from '../flux/actions/BoardActions';
import {connect} from 'react-redux'

class AddBoard extends Component {
    state = {
        isCreateBoard: false,
        newBoardName: ""
    }

    handleClick = () => {
        this.setState({isCreateBoard: true})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createBoard(this.state.newBoardName);
        this.setState({newBoardName: ""})
        this.setState({isCreateBoard: false})
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    render() {
        return (
            <div>
            {!this.state.isCreateBoard? 
                <div><Button onClick={this.handleClick}>Add Board</Button></div>
                :<form  onSubmit={this.handleSubmit} >
                    <div className="mb-3">
                        <label className="form-label font-weight-bold" >Name:</label>
                        <input 
                                type = "text"
                                name = "newBoardName"
                                className="form-control"
                                placeholder = "Add the name ..."
                                value = {this.state.newBoardName}
                                onChange = { this.handleChange }
                            />
                    </div>
                    <Button variant="info" type="submit" size="md" block>Create New Board</Button>
                </form>
            }
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})

export default connect(mapStateToProps, {createBoard})(AddBoard)