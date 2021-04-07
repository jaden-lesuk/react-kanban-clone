import React, { Component } from 'react';
import {connect} from 'react-redux';
import Board from './Board'

class Kanban extends Component {
    render() {
        const {boards} = this.props.board
        return (
            <div>
                {boards.map( board => (
                    <Board board={board}/>
                    ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})
export default connect(mapStateToProps, {})(Kanban)