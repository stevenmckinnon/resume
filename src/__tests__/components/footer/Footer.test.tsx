import { shallow } from 'enzyme';
import * as React from 'react';
import Footer from '../../../components/footer/Footer';

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
