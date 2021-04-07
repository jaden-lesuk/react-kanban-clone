import React, { Component } from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import AddBoard from './AddBoard';
import {Row, Col} from 'react-bootstrap';

class Kanban extends Component {
    render() {
        const {boards} = this.props.board
        return (
            <Row>
                {boards.map( board => (<Col md={3}><Board key={board.id} board={board} style={styles.ColumnStyle}/></Col>))}
                {boards.length < 5? <Col md={3}><AddBoard style={styles.ColumnStyle}/></Col>: null}
            </Row>
        )
    }
}

const styles = {
    ColumnStyle: {
        marginTop: '2vh',
        marginBottom: '2vh',
    }
}

const mapStateToProps = (state) => ({
    board: state.board
})

export default connect(mapStateToProps, {})(Kanban)