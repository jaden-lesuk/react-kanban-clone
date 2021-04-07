import React, { Component } from 'react'

export default class Board extends Component {
    render() {
        const name =this.props.board

        return (
            <div>
                {name}
            </div>
        )
    }
}
