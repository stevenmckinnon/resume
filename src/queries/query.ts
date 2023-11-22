import gql from 'graphql-tag';

const personalDetails = gql`
query content($where: PersonalDetailsWhereInput) {
  personalDetailses: personalDetailsesConnection(where: $where) {
    edges {
      node {
        name
        location
        email
        intro
        biography
        cvUrl
        photo {
          url
        }
        workExperiences(orderBy: fromDate_DESC) {
          company
          description
          fromDate
          toDate
          jobTitle
        }
        skills {
          skills
        }
        educations(orderBy: fromDate_DESC) {
          name
          course
          fromDate
          toDate
        }
        socialMedia {
          twitter
          linkedIn
          instagram
          photography
          github
          buyMeACoffee
        }
      }
    }
  }
}
`;

export default personalDetails;