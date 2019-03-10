import React from 'react';
import moment from 'moment';

class Resume extends React.Component {
    formatDates(fromDate, toDate) {
        const from = moment(fromDate.substring(0, 10), 'YYYY-MM-DD').format('MMMM YYYY');
        const to = toDate ? moment(toDate.substring(0, 10), 'YYYY-MM-DD').format('MMMM YYYY') : 'Present';
        return `${from} - ${to}`;
    }

    render() {
        return (
            <section id="resume">
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {this.props.work.map((job, index) => {
                            return (
                                <div key={index} className="row item">
                                    <div className="twelve columns">
                                        <h3>{job.company}</h3>
                                        <p className="info">{job.jobTitle} <span>•</span> <em
                                            className="date">{this.formatDates(job.fromDate, job.toDate)}</em>
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
                        {this.props.education.map((school, index) => {
                            return (
                                <div key={index} className="row item">
                                    <div className="twelve columns">
                                        <h3>{school.name}</h3>
                                        <p className="info">{school.course}<span> • </span><em
                                            className="date">{this.formatDates(school.fromDate, school.toDate)}</em></p>
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
                            {this.props.skills.map((skill, index) => {
                                return (<div key={index} className="skill-tags">{skill}</div>)
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;