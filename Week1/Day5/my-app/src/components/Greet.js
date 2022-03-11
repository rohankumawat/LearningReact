import React from 'react'

// function Greet(){
//     return <h1>Hello DazzP</h1>
// }

// export const Greet = () => <h1> Hello DazzP</h1>

// export default Greet

//PROPS

const Greet = props => {
    console.log(props)
    return(
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName} </h1>
            {props.children}
        </div>
    )
}

export default Greet