import React, { Component } from 'react';
import Propsinfo from './Propsinfo';
import Stateinfo from './Stateinfo';
import LyfeCycleinfo from './LyfeCycleinfo';

class Componentinfo extends Component {
    render() {
        return (
            <div className="component-info">
                <h2 className="component-title">Componentinfo</h2>
                <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. </p>

                <div className="com"><Propsinfo /></div>

                <div className="com"><Stateinfo /></div>

                <div className="com"><LyfeCycleinfo /></div>
            </div>
        )
    }
}

export default Componentinfo;