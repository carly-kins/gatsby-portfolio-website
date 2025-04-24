import * as React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { graphql } from 'gatsby';
import '../styles/styles.scss';

const IndexPage = ( { data } ) => {
	const about = data.about.html;

	return (
		<Layout>
			<Hero />
			<div className='container' dangerouslySetInnerHTML={{ __html: about }} />

			{/*Highlighted Projects*/}
			{/*CV and Resume*/}
    
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
    about: markdownRemark(frontmatter: {title: {eq: "About"}}) {
      html
    }
  }`;

export const Head = () => <title>Home Page</title>;
