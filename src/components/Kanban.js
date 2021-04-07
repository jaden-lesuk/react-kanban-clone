import React, { Component } from 'react';
import {connect} from 'react-redux';
import Board from './Board'
import AddBoard from './AddBoard'

class Kanban extends Component {
    render() {
        const {boards} = this.props.board
        return (
            <div>
                {boards.map( board => (<Board key={board.id} board={board}/>))}
                {boards.length < 5? <AddBoard/>: null}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})
export default connect(mapStateToProps, {})(Kanban)