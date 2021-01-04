import React, {Component} from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import './app.css'

export default class App extends Component {

    state = {
        data: [
            {label: 'Going to learn React', important: false, id: 'a1a1'},
            {label: 'That is so good', important: false, id: 'a1a2'},
            {label: 'I need a break...', important: false, id: 'a1a3'},
        ]
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id)

            const newArray = [...data.slice(0, index),
                              ...data.slice(index + 1)]

            return {
                data: newArray
            }
        })
    } 
    
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem} />
                <PostAddForm/>
            </div>
        )
    }
    
}