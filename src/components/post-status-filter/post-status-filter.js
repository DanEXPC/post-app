import React, { Component } from 'react'

import './post-status-filter.css'

export default class PostStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'like', label: 'Liked'},
    ]

    render() {

        const buttons = this.buttons.map(({name, label}) => {
            const clazz = this.props.filter === name ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button key={name} 
                    type="button" 
                    onClick={() => this.props.onFilterSelected(name)}
                    className={`btn ${clazz}`}>{label}
                    </button>
            )
        })
        return (
            <div className="btn-group">
               {buttons}
            </div>
        )
    }
}
