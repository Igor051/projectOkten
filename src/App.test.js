import React from 'react';
import ReactDOM from 'react-dom'
import {render} from '@testing-library/react';
import SocialNetworkApp from './App';

test('renders learn react link', () => {
    const {getByText} = render(<SocialNetworkApp/>);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SocialNetworkApp/>, div);
    ReactDOM.unmountComponentAtNode(div)
});