import React, { Component } from 'react';
import {connect} from 'react-redux';
import Board from './Board';
import AddBoard from './AddBoard';
import {Row, Col, Alert} from 'react-bootstrap';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

class Kanban extends Component {
    render() {
        const {boards} = this.props.board
        return (
            <DndProvider backend={HTML5Backend}>
                <Row>
                    {boards.map( board => (<Col md={3}><Board key={board.id} column={board} style={styles.ColumnStyle}/></Col>))}
                    {boards.length < 5? <Col md={3}><AddBoard style={styles.ColumnStyle}/></Col>:
                    <Col md={3}><Alert variant="info" style={styles.ColumnStyle}>Amount of boards exceeded</Alert></Col>
                    }
                </Row>
            </DndProvider>
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