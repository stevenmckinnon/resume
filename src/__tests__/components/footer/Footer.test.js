import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../../components/footer/Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests the Footer component', () => {
    it('renders the Footer component', () => {
        const name = 'Steve McKinnon';
        const socialMedia = {
            twitter: 'http://twitter.com/stevenmckinnon',
            linkedIn: 'https://www.linkedin.com/in/stevenmckinnon92/',
            instagram: 'http://instagram.com/stevenmckinnon',
            photography: 'http://stevenmckinnon.co.uk',
            github: 'https://github.com/stevenmckinnon'
        };
        const wrapper = shallow(<Footer name={name} socialMedia={socialMedia} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders the Footer component', () => {
        const name = 'Steve McKinnon';
        const socialMedia = {};
        const wrapper = shallow(<Footer name={name} socialMedia={socialMedia} />);
        expect(wrapper).toMatchSnapshot();
    });
});
