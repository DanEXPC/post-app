import React, { Component } from 'react'

import './search-panel.css'

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onTermChange = (event) => {
        const term = event.target.value
        this.setState({ term })
        this.props.onTermChange(term)
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="search by posts"
                onChange={this.onTermChange}
                />
        )
    }
}