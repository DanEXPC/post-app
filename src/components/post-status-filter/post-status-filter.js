import React, { Component } from 'react'

import styled from 'styled-components'

const AppStatusFilter = styled.div``

const FilterButton = styled.button``
export default class PostStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'like', label: 'Liked'},
    ]

    render() {

        const buttons = this.buttons.map(({name, label}) => {
            const clazz = this.props.filter === name ? 'btn-info' : 'btn-outline-secondary'
            return (
                <FilterButton key={name} 
                    type="button" 
                    onClick={() => this.props.onFilterSelected(name)}
                    className={`btn ${clazz}`}>{label}
                    </FilterButton>
            )
        })
        return (
            <AppStatusFilter className="btn-group">
               {buttons}
            </AppStatusFilter>
        )
    }
}
