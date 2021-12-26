import React, { Component } from 'react';

//Stateless functional component (we don't need render())
//You can use sfc to create template for a Stateless functional Component

//use {} for obejct destructuring (so you don't have to keep sayig props.whatver)
const Navbar = ({counters}) => {
    let totalTasks = 0;
    for (let index = 0; index < counters.length; index++) {
        totalTasks += counters[index].value;     
    }
    return  (<nav className="navbar navbar-light bg-light">
        <a className ="navbar-brand" href="#">
            Navbar
            <span className="badge badge-pill badge-secondary m-2">
                Total tasks pending: {totalTasks}
            </span>
        </a>
      </nav>
    );
}

 
export default Navbar;