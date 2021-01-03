import React from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'

import './app.css'

const App = () => {

    const data = [
        {label: 'Going to learn React', important: false, id: 'a1a1'},
        {label: 'That is so good', important: false, id: 'a1a2'},
        {label: 'I need a break...', important: false, id: 'a1a3'},
    ]

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </div>
    )
}

export default App