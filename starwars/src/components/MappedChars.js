import React from 'react'

import Character from './Character'

const MappedChars = props => {
    console.log(props)
    if(!props.chars) return <div>Loading...</div>
    return (
        <div>
            {props.chars.map(each => <Character {...each} key={each.name}/>)}
        </div>
    )
}

export default MappedChars