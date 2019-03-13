import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Resume from '../../../components/resume/Resume';

Enzyme.configure({ adapter: new Adapter() });

describe('Tests the Resume component', () => {
    it('renders the Resume component', () => {
        const work = [
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
        ];
        const education = [
            {
              name: 'Uni name',
              course: 'Course name (BSc Hons)',
              fromDate: '2010-09-13T00:00:00.000Z',
              toDate: '2014-05-21T00:00:00.000Z'
            }
          ];
        const skills = [
            'JavaScript',
            'HTML',
            'CSS',
            'Partying'
          ];
        const wrapper = shallow(<Resume work={work} education={education} skills={skills} />);
        expect(wrapper).toMatchSnapshot();
    });
});
