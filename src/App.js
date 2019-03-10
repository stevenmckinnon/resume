import React from 'react';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const personalDetails = gql`
query content($where: PersonalDetailsWhereInput) {
    personalDetailses: personalDetailsesConnection(where: $where) {
      edges {
        node {
          name
          location
          email
          biography
          cvUrl
          workExperiences(orderBy: fromDate_DESC) {
            company,
            description,
            fromDate,
            toDate,
            jobTitle
          }
          skills {
            skills
          }
          educations(orderBy: fromDate_DESC) {
            name,
            course,
            fromDate,
            toDate
          }
        }
      }
    }
  }
`;

const App = ({ data: { loading, error, personalDetailses } }) => {
    if (error) return <h1>Error fetching the data!</h1>
    if (!loading) {
        const personalDetails = personalDetailses.edges[0].node;
        const work = personalDetails.workExperiences;
        const education = personalDetails.educations;
        const skills = personalDetails.skills.skills;

        return (
            <div className="App">
                <Header />
                <About personalDetails={personalDetails} />
                <Resume work={work} education={education} skills={skills} />
                <Footer />
            </div>
        )
    }
    return (
        <div className="loading">
            <div id="spinContain" />
            <div id="spinContainT" />
        </div>
    );
}

export default graphql(personalDetails, {
    options: () => ({
        variables: {
            name: 'Steve McKinnon'
        }
    })
})(App);