import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'

import List from './List';

describe('List Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as epxected', () => {
        const tree = renderer
            .create(<List header = 'Any Header'/>)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
