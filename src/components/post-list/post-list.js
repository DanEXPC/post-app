import React from 'react'
import PostListItem from '../post-list-item'

import styled from 'styled-components'

const AppList = styled.ul`
    margin-top: 50px;
`

const ListGroupItem = styled.li`
    padding: 20px 35px 10px 35px;
    margin-top: 10px;
`

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {

        if ( typeof item === 'object' && !isEmpty(item) ){
            const {id, ...itemProps} = item
            return (
                <ListGroupItem key={id} className='list-group-item'>
                    <PostListItem 
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleLiked={() => onToggleLiked(id)} />
                </ListGroupItem>
            )
        }
        return null
    })

    function isEmpty(obj) {
        return Object.keys(obj).length === 0
    }

    return (
        <AppList className="list-group">
            {elements}
        </AppList>
    )
}

export default PostList