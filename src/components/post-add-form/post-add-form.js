import React, {Component} from 'react'

import styled from 'styled-components'

const BottomPanel = styled.form`
    display: flex;
    margin-top: 20px;
`

const NewPostLabel = styled.input`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`

export default class PostAddForm extends Component {

    state = {
        text: ''
    }

    onValueChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.onAdd(this.state.text)
        this.setState({ text: ''})
    }

    render () {
        return (
            <BottomPanel
                onSubmit={this.onSubmit}>
                <NewPostLabel
                    type="text"
                    placeholder="What's up?"
                    className="form-control"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    Post</button>
            </BottomPanel>
        )
    }
} 
