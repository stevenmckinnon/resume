import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../../../components/header/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests the Header component', () => {
    it('renders the Header component', () => {
        const name = 'Steve McKinnon';
        const intro = `I'm a Glasgow based front end developer and web designer creating modern web apps in the financial sector.`;
        const socialMedia = {
            twitter: 'http://twitter.com/stevenmckinnon',
            linkedIn: 'https://www.linkedin.com/in/stevenmckinnon92/',
            instagram: 'http://instagram.com/stevenmckinnon',
            photography: 'http://stevenmckinnon.co.uk',
            github: 'https://github.com/stevenmckinnon'
        };
        const wrapper = shallow(<Header name={name} intro={intro} socialMedia={socialMedia} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('renders the Header component', () => {
        const name = 'Steve McKinnon';
        const socialMedia = {};
        const intro = `I'm a Glasgow based front end developer and web designer creating modern web apps in the financial sector.`;
        const wrapper = shallow(<Header name={name} intro={intro} socialMedia={socialMedia} />);
        expect(wrapper).toMatchSnapshot();
    });
});
