import React, { Component } from 'react'

import styled from 'styled-components'

const SearchAppInput = styled.input`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`
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
            <SearchAppInput
                className="form-control"
                type="text"
                placeholder="search by posts"
                onChange={this.onTermChange}
                />
        )
    }
}