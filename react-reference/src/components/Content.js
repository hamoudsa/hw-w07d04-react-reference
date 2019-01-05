import React, { Component } from 'react';
import Componentinfo from './Componentinfo';
import JSXinfo from './JSXinfo';

class Content extends Component {
    render() {
        return (
            <div className="content">
                <Componentinfo />
                <JSXinfo />
            </div>
        )
    }
}

export default Content;