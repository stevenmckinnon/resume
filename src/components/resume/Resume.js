import React from 'react';
import skills from '../../cv-data/Skills';
import jobs from '../../cv-data/Jobs';
import education from '../../cv-data/Education';

class Resume extends React.Component {
    render() {
        return (
            <section id="resume">
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {jobs.map((job, index) => {
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
                        {education.map((school, index) => {
                            return (
                                <div key={index} className="row item">
                                    <div className="twelve columns">
                                        <h3>{school.schoolName}</h3>
                                        <p className="info">{school.course}<span> • </span><em
                                            className="date">{school.years}</em></p>
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
                            {skills.map((skill, index) => {
                                return (<div key={index} className="skill-tags">{skill.name}</div>)
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;