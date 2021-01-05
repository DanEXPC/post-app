import React, {Component} from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import nextId from "react-id-generator";

import './app.css'

export default class App extends Component {

    state = {
        data: [
            {label: 'Going to learn React', important: false, like: false, id: nextId(`id-${Date.now()}-`)},
            {label: 'That is so good', important: false, like: false, id: nextId(`id-${Date.now()}-`)},
            {label: 'I need a break...', important: false, like: false, id: nextId(`id-${Date.now()}-`)},
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

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: nextId(`id-${Date.now()}-`)
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem]

            return {
                data: newArr
            }
        })
    } 

    onToggleProperty = (name, id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const old = data[index]
            const newItem = {...old}
            newItem[name] = !old[name]

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    } 

    onToggleImportant = (id) => {
        this.onToggleProperty('important', id)
    }

    onToggleLiked = (id) => {
        this.onToggleProperty('like', id)
    }
    
    render() {
        const {data} = this.state

        const liked = data.filter(item => item.like).length
        const allPosts = data.length

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked} />
                <PostAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }
    
}