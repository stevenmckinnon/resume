import React from 'react';
import Skills from './Skills';

class Resume extends React.Component {
    render() {
        return (
            <section id="resume">

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>JP Morgan Chase</h3>
                                <p className="info">Front End Developer <span>•</span> <em className="date">June 2014 -
                                    Present</em></p>
                                <p>
                                    Currently working on a React based web application which allows users to write
                                    queries using
                                    GraphQL to extract data and visualise data models. Working with end users to design
                                    based on functional
                                    needs.
                                </p>
                            </div>
                        </div>
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
                            {Skills.map(skill => {return (<div className="skill-tags">{skill.name}</div>)})}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;