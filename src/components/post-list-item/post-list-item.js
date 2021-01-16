import React, {Component} from 'react'

import styled from 'styled-components'

const AppListItem = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.25rem;
    button {
        width: 35px;
        height: 35px;
        margin: 3px;
        font-size: 17px;
        border: none;
        cursor: pointer;
        :focus {
            box-shadow: none;
            outline: none;
        }
    }
    .btn-star {
        color: ${props => props.important ? '#aeaeae' : '#FFD700'};
    }
    .btn-trash {
        color: rgb(109, 27, 27);
    }
    .fa-heart {
        width: 35px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        font-size: 16px;
        color: red;
        transition: 0.3s all;
        transform: ${props => props.like ? 'translateX(0px)' : 'translateX(30px)'};
        opacity: ${props => props.like ? 1 : 0};
    }
`

const AppListItemLabel = styled.span`
    display: block;
    line-height: 35px;
    cursor: pointer;
    user-select: none;
    transition: 0.5s all;
    color: ${props => props.important ? '#FFD700' : ''};
`

const AppListItemProps = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default class PostListItem extends Component {

    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, like, important} = this.props

        return (
            <AppListItem important={important} like={like}
                className="app-list-item">
                <AppListItemLabel important={important}
                onClick={onToggleLiked}>
                    {label}
                </AppListItemLabel >
                <AppListItemProps>
                    <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={onToggleImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    type="button" 
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </AppListItemProps>
            </AppListItem>
        )
    }
}
