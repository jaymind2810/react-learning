import React, { Component } from "react"
import './Person.css'
import Aux from "../../../hoc/Aux"
import WithClass from "../../../hoc/WithClass"
import classes from './Person.css'


class Person extends Component {

    render() {
        console.log('--[Person.js]---rendering--------')
        return (
            <Aux>
            
                <p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old !</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>
            
            </Aux>   
        )
    }
}

export default WithClass(Person, classes.Person);










// import React from "react"
// import './Person.css'

// const person = (props) => {
//     // return <p> I'm a Person and I am {Math.floor(Math.random()* 30)} years old !</p>
    
//     // const rnd = Math.random();

//     // if (rnd > 0.7) {
//     //     throw new Error("Something went wrong");
//     // }
//     console.log('--[Person.js]---rendering--------')

    
//     return (
//         <div className="Person">
//             <p onClick={props.click}> I'm {props.name} and I am {props.age} years old !</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}></input>
//         </div>
        
//     )
// }

// export default person;