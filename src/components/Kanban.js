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
            //Acts as a sandbox for dragging and dropping
            <DndProvider backend={HTML5Backend}>
                <Row>
                    {/* Board and AddBoard are wrapped in <Col> for consistent styling across different rows*/}
                    {boards.map( board => (<Col md={3}><Board key={board.id} column={board} style={styles.ColumnStyle}/></Col>))}
                    {/* This makes sure a user can' add more than 5 boards */}
                    {boards.length < 5? <Col md={3}><AddBoard style={styles.ColumnStyle}/></Col>:
                    <Col md={3}><Alert variant="info" style={styles.ColumnStyle}>Amount of boards exhausted. You can only create 5 boards</Alert></Col>
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