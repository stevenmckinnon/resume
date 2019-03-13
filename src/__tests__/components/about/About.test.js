import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import About from '../../../components/about/About';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests the About component', () => {
    it('renders the About component', () => {
        const details = {
            name: 'John Smith',
            location: 'New York, NY',
            biography: 'I am a dev, hear me roar',
            cvUrl: 'http://url.com',
            email: 'hello@email.com'
        };
        const photo = {
            handle: 'handle',
            width: 1333,
            height: 1333
        };
        const wrapper = shallow(<About personalDetails={details} photo={photo} />);
        expect(wrapper).toMatchSnapshot();
    });
});
