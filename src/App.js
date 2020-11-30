import React from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';
import { graphql } from 'react-apollo';
import personalDetails from './queries/query';

const App = props => {
    if (props.data.error) {
        return <h1>Error fetching the data!</h1>;
    } else if (!props.data.loading) {
        const personalDetails = props.data.personalDetailses.edges[0].node;
        const {
            workExperiences,
            educations,
            intro,
            socialMedia,
            name,
            photo
        } = personalDetails;
        const { skills } = personalDetails.skills;

        return (
            <div className="App">
                <Header name={name} intro={intro} socialMedia={socialMedia} />
                <About personalDetails={personalDetails} photo={photo} />
                <Resume work={workExperiences} education={educations} skills={skills} />
                <Footer name={name} socialMedia={socialMedia} />
            </div>
        );
    }

    return (
        <div className="loading">
            <div id="spinContain" />
            <div id="spinContainT" />
        </div>
    );
};

export const AppComp = App;
export default graphql(personalDetails, {
    options: () => ({
        variables: {
            name: 'Steve McKinnon'
        }
    })
})(App);