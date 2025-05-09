//TODO: add individual pages for projects, etc

import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function BlogPost( { data } ) {
	const post = data.markdownRemark;
	let featuredImg = getImage( post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData );
	console.log(post);
	return (
		<Layout homepage={false}>
			<div>
				<h1>{post.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
				{ featuredImg ? 
					<GatsbyImage image={featuredImg} /> : ''
				}
				
			</div>
		</Layout>
	);
}

export const query = graphql`
  query($slug: String!) {
  markdownRemark(frontmatter: { slug: { eq: $slug } }) {
    html
    frontmatter {
	  project {
		 title
      	 featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
	  }
    }
  }
}
`;