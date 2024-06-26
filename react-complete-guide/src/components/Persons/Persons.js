import React, { PureComponent } from "react";

import Person from "./Person/Person";

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('--[Persons.js]---getDerivedStateFromProps--------')
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('--[Persons.js]---componentWillReceiveProps--------', props)
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('--[Persons.js]---shouldComponentUpdate--------')
    //     if (
    //         nextProps.persons !== this.props.persons || 
    //         nextProps.persons !== this.props.persons || 
    //         nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //     // return true;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('--[Persons.js]---getSnapshotBeforeUpdate--------')
        return {message: "SnapShot !"};
    }

    // componentWillUpdate(){
    //     console.log('--[Persons.js]---componentWillUpdate--------')
    // }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('--[Persons.js]---componentDidUpdate--------')
        console.log(snapShot);
    }

    componentWillUnmount(){
        console.log('--[Persons.js]---componentWillUnmount--------')
    }


    render() {
        console.log('--[Persons.js]---render--------')
        return this.props.persons.map((person, index) =>{
            return (
            <Person 
              click={() => this.props.clicked(index)}  
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event)=> this.props.changed(event, person.id)}/>
            );
          });
        }
    }

export default Persons;




// const persons = (props) => {
    
//     console.log('--[Persons.js]---render--------')
//     return props.persons.map((person, index) =>{
//         return (<Person 
//           click={() => props.clicked(index)}  
//           name={person.name}
//           age={person.age}
//           key={person.id}
//           changed={(event)=> props.changed(event, person.id)}/>
//         );
//       });
//     }

// export default persons;