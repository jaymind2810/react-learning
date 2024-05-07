import React, { useState, Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';


class App extends Component{

  constructor(props) {
    super(props);
    console.log("--[App.js] constructor-----------")
  }

  state = {
    persons : [
      { id:"sample1", name: 'Max', 'age': 23 },
      { id:"sample2", name: 'Manu', 'age': 29 },
      { id:"sample3", name: 'Ram', 'age': 25 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
  };

  static getDerivedStateFromProps(props, state){
    console.log('--[App.Js] getDerivedStateFromProps--', props)
    return state;
  }

  // componentWillMount(){
  //   console.log('--[App.js]--componentWillMount---------')
  // }

  componentDidMount(){
    console.log('--[App.js]--componentDidMount---------')

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('--[App.js]--shouldComponentUpdate---------')
    return true;
  }

  componentDidUpdate() {
    console.log('--[App.js]--componentDidUpdate---------')
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangehandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    console.log(personIndex, "------Person Index--------")
    // console.log(...this.state.persons(personIndex), "------Person Index--------")

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({},this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons, 
        changeCounter: this.state.changeCounter + 1
      };
    });

    // this.setState({
    //   persons : [
    //     { name: 'Max', age: 25 },
    //     { name: event.target.value, age: 24 },
    //     { name: 'Ram2', age: 21 }
    //   ] 
    // })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {

    console.log('--[App.js]---render--------')

    let persons = null

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangehandler}/>
    
    }

    return (
      <Aux>
        <button onClick={() => {
          this.setState({showCockpit: false});
        }}
        >
          Remove Cockpit
        </button>
        { this.state.showCockpit ? (
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
        />
        ) : null }
        {persons}

      </Aux>
    )
  }

}

export default WithClass(App, classes.App);







// class App extends Component{

//   state = {
//     persons : [
//       { name: 'Max', 'age': 23 },
//       { name: 'Manu', 'age': 29 },
//       { name: 'Ram', 'age': 25 }
//     ],
//     otherState: 'some other value',
//     showPersons: false,
//   };

//   switchNameHandler = (newName) => {
//     console.log('clicked');
//     this.setState({
//       persons : [
//         { name: newName, 'age': 25 },
//         { name: 'Manu2', 'age': 24 },
//         { name: 'Ram2', 'age': 21 }
//       ] 
//     })
    
//   }

//   nameChangehandler = (event) => {
//     this.setState({
//       persons : [
//         { name: 'Max', age: 25 },
//         { name: event.target.value, age: 24 },
//         { name: 'Ram2', age: 21 }
//       ] 
//     })
//   }

//   togglePersonHandler = () => {
//     const doesShow = this.state.showPersons;
//     this.setState({showPersons: !doesShow});
//   }


//   render() {

//     const style = {
//       backgroundColor: 'white',
//       font: 'inherit',
//       border: '1px solid blue',
//       padding: '8px',
//       cursor: 'pointer'
//     };

//     return (
//       <div className='App'>
//         <h1>Hi, I'm a react</h1>
//         <p> This is realy Working</p>
//         <button
//           style={style} 
//           onClick={this.togglePersonHandler}>Switch Name</button>

//         { 
//         this.state.showPersons === true ?
//         <div>
//           <Person 
//             name={this.state.persons[0].name} 
//             age={this.state.persons[0].age}/>
//           <Person 
//             name={this.state.persons[1].name} 
//             age={this.state.persons[1].age}
//             click={this.switchNameHandler.bind(this,'New Max 2!')}
//             changed={this.nameChangehandler}> My Hobbies: Cricket </Person>
//           <Person 
//             name={this.state.persons[2].name} 
//             age={this.state.persons[2].age}/>
//         </div> : null
//         }
//       </div>
//     )
//     // return React.createElement('div', {className: 'App'},React.createElement('h1', null, 'Does this work ?'))
//   }

// }

// export default App;


















// const App = (props) => {

//   const [ personsState, setPersonsState ] = useState({
//     persons : [
//       { name: 'Max', 'age': 23 },
//       { name: 'Manu', 'age': 29 },
//       { name: 'Ram', 'age': 25 }
//     ],
//     otherState: 'some other value'
//   })

//   const switchNameHandler = () => {
//     console.log('clicked');
//     setPersonsState({
//       persons : [
//         { name: 'Maximili', 'age': 25 },
//         { name: 'Manu2', 'age': 24 },
//         { name: 'Ram2', 'age': 21 }
//       ],
//       // otherState : personsState.otherState, 
//     })
    
//   }

//   return (
//     <div className='App'>
//       <h1>Hi, I'm a react</h1>
//       <p> This is realy Working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person 
//         name={personsState.persons[0].name} 
//         age={personsState.persons[0].age}/>
//       <Person 
//         name={personsState.persons[1].name} 
//         age={personsState.persons[1].age}
//         click={switchNameHandler}> My Hobbies: Cricket </Person>
//       <Person 
//         name={personsState.persons[2].name} 
//         age={personsState.persons[2].age}/>
//     </div>
//   )
//   // return React.createElement('div', {className: 'App'},React.createElement('h1', null, 'Does this work ?'))

// }

// export default App;