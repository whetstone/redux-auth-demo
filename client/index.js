import React, { Component } from 'react';
import { render } from 'react-dom';

class NewComponent extends Component {

    render() {
        return (
            <div>
                Hi
            </div>
        );
    }

}

render(
    <NewComponent />,
document.getElementById('app-wrapper'));
