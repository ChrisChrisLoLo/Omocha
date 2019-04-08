import React from 'react';
import ReactDOM from 'react-dom';
import Notepad from '../../components/notepad/index';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notepad />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notepad />, div);
    ReactDOM.unmountComponentAtNode(div);
});