import React from 'react'

const Hello = () => {
//    return (
//        <div>
//            <h1>Hello Dazzpooool</h1>
//        </div>
//    )    
//    return React.createElement('div', null, 'Hello Poooool')
//    return React.createElement('div', null, '<h1>Hello Pool</h1>')
//    return React.createElement('div', null, 'h1', 'Hello Poool!')
    return React.createElement('div', null, React.createElement('h1', null, 'Hello Pooolz!'))
}

export default Hello