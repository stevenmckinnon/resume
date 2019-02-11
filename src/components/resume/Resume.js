import React from 'react';
import Skills from './Skills';
import Jobs from './Jobs';

class Resume extends React.Component {
    render() {
        return (
            <section id="resume">
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        { Jobs.map((job,index) => {
                            return (
                                <div key={index} className="row item">
                                    <div className="twelve columns">
                                        <h3>{job.company}</h3>
                                        <p className="info">{job.title} <span>•</span> <em
                                            className="date">{job.years}</em>
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
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Glasgow Caledonian University</h3>
                                <p className="info">Computer Games Software Development (BSc Hons) <span>•</span> <em
                                    className="date">September 2010 - May 2014</em></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="skills">
                            {Skills.map((skill,index) => {
                                return (<div key={index}className="skill-tags">{skill.name}</div>)
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;