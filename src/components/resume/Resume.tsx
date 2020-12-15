import * as React from 'react';
import { format } from 'date-fns'
import { Job, Education } from '../../interfaces';
import { Element } from 'react-scroll';

interface Props {
    work: Job[];
    education: Education[];
    skills: string[];
}

const formatDates = (fromDate: string, toDate: string): string => {
    const from = format(new Date(fromDate.substring(0, 10)), 'MMMM yyyy');
    const to = toDate ? format(new Date(toDate.substring(0, 10)), 'MMMM yyyy') : 'Present';
    return `${from} - ${to}`;
}

const Resume: React.FC<Props> = ({ work, education, skills }) => (
    <Element name="resume">
        <section id="resume">
            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {
                        work.map((job, index) => {
                            console.log(job);
                            return (
                                <div key={index} className="row item">
                                    <div className="twelve columns">
                                        <h3>{job.company}</h3>
                                        <p className="info">{job.jobTitle} <span>•</span> <em
                                            className="date">{formatDates(job.fromDate, job.toDate)}</em>
                                        </p>
                                        <p>{job.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    {education.map((school, index) => {
                        return (
                            <div key={index} className="row item">
                                <div className="twelve columns">
                                    <h3>{school.name}</h3>
                                    <p className="info">{school.course}<span> • </span><em
                                        className="date">{formatDates(school.fromDate, school.toDate)}</em></p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="skills">
                        {skills.map((skill, index) =>
                            <div key={index} className="skill-tags">{skill}</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    </Element>
);

export default Resume;