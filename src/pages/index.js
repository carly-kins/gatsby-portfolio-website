import * as React from 'react';
import Layout from '../components/layout';
import Cards from '../components/cards';
import Hero from '../components/hero';
import { graphql } from 'gatsby';
import '../styles/styles.scss';

const IndexPage = ( { data } ) => {
	const about = data.about.frontmatter.about;
	const hero = data.about.frontmatter.hero;
	const projectCards = data.projectCards.edges;

	return (
		<Layout>
			<Hero hero={hero} />
			<div className='container'> 
				<h2 id={about.id}>{about.heading}</h2>
				<p>{about.description}</p>
			</div>
			<Cards cards={projectCards} />

			{/*CV and Resume*/}
			{/*TODO section*/}
      
		</Layout>
	);
};

export default IndexPage;
export const pageQuery = graphql`
 query indexPageQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
  about: markdownRemark(fileAbsolutePath: {regex: "/homepage.md/"}) {
    frontmatter {
      hero {
        heading
        subheading
      }
      about {
        heading
        description
        id
      }
    }
  }
  projectCards: allMarkdownRemark(
    filter: {frontmatter: {highlight: {eq: true}, type: {eq: "project"}}}
  ) {
    edges {
      node {
        frontmatter {
          title
          slug
        }
      }
    }
  }
}`;

export const Head = () => <title>Home Page</title>;


{/*TODO: ADD PROJECT SECTION
            -- Cards of Clients I have worked with (Later Feature)
              - VA
              - AdCouncil
              - NBA
              - Panama City Diving
              - HHS
              - NC Safe
              - Start your Recovery
              - 
            --highlight the following projects 
              - NBA mind gym
              - NBA mind health 
              - VA work 
              - Construction Specialties
          */}