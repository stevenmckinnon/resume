import React from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';
import { graphql } from 'react-apollo';
import personalDetails from './queries/query';

class App extends React.Component {
  render() {
    if (this.props.data.error) return <h1>Error fetching the data!</h1>;
    if (!this.props.data.loading) {
        const personalDetails = this.props.data.personalDetailses.edges[0].node;
        const work = personalDetails.workExperiences;
        const education = personalDetails.educations;
        const skills = personalDetails.skills.skills;
        const intro = personalDetails.intro;
        const socialMedia = personalDetails.socialMedia;

        return (
            <div className="App">
                <Header name={personalDetails.name} intro={intro} socialMedia={socialMedia} />
                <About personalDetails={personalDetails} photo={personalDetails.photo} />
                <Resume work={work} education={education} skills={skills} />
                <Footer name={personalDetails.name} socialMedia={socialMedia} />
            </div>
        );
    }
    return (
        <div className="loading">
            <div id="spinContain" />
            <div id="spinContainT" />
        </div>
    );
  }
}

export const AppComp = App;
export default graphql(personalDetails, {
    options: () => ({
        variables: {
            name: 'Steve McKinnon'
        }
    })
})(App);