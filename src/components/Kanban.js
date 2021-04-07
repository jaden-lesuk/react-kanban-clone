import React, { Component } from 'react';
import {connect} from 'react-redux';

class Kanban extends Component {
    render() {
        const {boards} = this.props.board
        return (
            <div>
                {boards.map( board => (<div>{board}</div>))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})
export default connect(mapStateToProps, {})(Kanban)