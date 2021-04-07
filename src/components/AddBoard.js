import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {createBoard} from '../flux/actions/BoardActions';
import {connect} from 'react-redux'

class AddBoard extends Component {
    handleClick = () => {
        this.props.createBoard("BRAND NEW BOARD")
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleClick}>Add Board</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})

export default connect(mapStateToProps, {createBoard})(AddBoard)