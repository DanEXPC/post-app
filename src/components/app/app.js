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
            {label: 'Going to learn React', important: false, id: 1},
            {label: 'That is so good', important: false, id: 2},
            {label: 'I need a break...', important: false, id: 3},
        ]
    }

    maxId = 4

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

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]

            return {
                data: newArr
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
                <PostAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }
    
}