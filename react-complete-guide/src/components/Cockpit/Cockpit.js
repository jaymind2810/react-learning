import React, { useEffect } from "react";

import classes from './Cockpit.css';

const Cockpit = props => {

    useEffect(() => {
        console.log('[Cockpit.js]---useEffect---');

        // const timer = setTimeout(() => {
        //     alert("Saved data to cloud !")
        // }, 1000);
        return () => {
            // clearTimeout(timer)
            console.log('[Cockpit.js]--Cleanup work------useEffect---')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js]---- 2nd ---useEffect---');
        return () => {
            console.log('[Cockpit.js]--Cleanup Work-- 2nd ---useEffect---');
        }
    })
    
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    

    if (props.personsLength <= 2) {
        assignedClasses.push( classes.red );
    }
    if (props.personsLength <= 1) {
        assignedClasses.push( classes.bold );
    }
    

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a react App</h1>
            <p className={assignedClasses.join( ' ' )}> This is realy Working</p>
            <button
            //   style={btnClass} 
              onClick={props.clicked}>Switch Name</button>
        </div>
    );
};

export default React.memo(Cockpit);