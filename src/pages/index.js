import * as React from 'react';
import Layout from '../components/layout';
import Section from '../components/section';
import Cards from '../components/cards';
import Hero from '../components/hero';
import { graphql } from 'gatsby';
import '../styles/styles.scss';

const IndexPage = ( { data } ) => {
	const hero = data.homepage.frontmatter.hero;
	const sections = data.homepage.frontmatter.sections;
	const projectCards = data.projectCards.edges;

	return (
		<Layout homepage={true}>
			<Hero homepage={true} hero={hero} />
			<div className='container'> 
				<div className="alert alert-primary" role="alert">
          I am in the process of migrating my visual art portfolio to this page. If you are interested in my artwork, please check out https://www.carlyannewooten.com/. If you are interested in what I plan to add to this site in the coming months check out GITHUB LINK.
				</div>
				{sections.map( ( section, index ) => 
					<Section key={index} section={section}>
						{ section.id === 'projects' ? <Cards cards={projectCards} /> : '' }
					</Section>
				) }
			</div>
			

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
  homepage: markdownRemark(fileAbsolutePath: {regex: "/homepage.md/"}) {
    frontmatter {
      hero {
        heading
        subheading
        alt
        img {
          childImageSharp {
            gatsbyImageData(width: 1080)
          }
        }
      }
      sections {
        description
        heading
        id
      }
    }
  }
  
  projectCards: allMarkdownRemark(
    filter: {frontmatter: {project: {highlight: {eq: true}}, type: {eq: "project"}}}
  ) {
    edges {
      node {
        frontmatter {
          slug
          project {
            description
            title
            skills
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 600)
              }
            }
          }
        }
      }
    }
  }
}`;

export { Head } from '../components/head';

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