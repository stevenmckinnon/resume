import { shallow } from 'enzyme';
import * as React from 'react';
import { AppComp } from '../../App';

describe('Tests the App component', () => {
    it('renders the App component loading', () => {
        const data = {
            loading: true,
            error: null,
            personalDetailses: {}
        };
        const wrapper = shallow(<AppComp data={data} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the App component error', () => {
        const data = {
            loading: false,
            error: 'error',
            personalDetailses: {}
        };
        const wrapper = shallow(<AppComp data={data} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders the App component data', () => {
        const data = {
            loading: false,
            error: null,
            personalDetailses: {
                edges: [{
                    node: {
                        name: 'John Smith',
                        location: 'New York, NY',
                        biography: 'I am a dev, hear me roar',
                        cvUrl: 'http://url.com',
                        email: 'hello@email.com',
                        workExperiences: [
                            {
                                company: 'Company Name',
                                description: 'Description of role',
                                fromDate: '2018-06-20T00:00:00.000Z',
                                toDate: null,
                                jobTitle: 'Job title 1'
                            },
                            {
                                company: 'Company Name 2',
                                description: 'Description of role',
                                fromDate: '2018-06-20T00:00:00.000Z',
                                toDate: null,
                                jobTitle: 'Job title 2'
                            },
                        ],
                        educations: [{
                            name: 'Uni name',
                            course: 'Course name (BSc Hons)',
                            fromDate: '2010-09-13T00:00:00.000Z',
                            toDate: '2014-05-21T00:00:00.000Z'
                        }],
                        skills: [
                            'JavaScript',
                            'HTML',
                            'CSS',
                            'Partying'
                        ],
                        socialMedia: {
                            twitter: 'http://twitter.com/stevenmckinnon',
                            linkedIn: 'https://www.linkedin.com/in/stevenmckinnon92/',
                            instagram: 'http://instagram.com/stevenmckinnon',
                            photography: 'http://stevenmckinnon.co.uk',
                            github: 'https://github.com/stevenmckinnon'
                        },
                        photo: {
                            handle: 'handle',
                            width: 1333,
                            height: 1333
                        }
                    }
                }]
            }
        };
        const wrapper = shallow(<AppComp data={data} />);
        expect(wrapper).toMatchSnapshot();
    });
});
