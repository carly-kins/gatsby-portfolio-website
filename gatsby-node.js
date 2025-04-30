/* eslint-disable no-undef */
exports.createSchemaCustomization = ( { actions } ) => {
	//TODO:
	const { createTypes } = actions;
	createTypes( `
	  type MarkdownRemark implements Node {
		frontmatter: Frontmatter
	  }
  
	  type Frontmatter {
		featuredImage: File @fileByRelativePath
		nav: [Nav]
		hero: Hero
  		about: About
	  }

	  type Nav {
  		title: String
  		url: String
	  }

	  type Hero {
  		heading: String
  		subheading: String
		img: File @fileByRelativePath
		alt: String
	  }

	  type About {
  		heading: String
  		description: String
		id: String
	  }
	` );
};

exports.createPages = async function ( { actions, graphql } ) {
	const result = await graphql( `
    {
        allMarkdownRemark (
            sort: { frontmatter: { date: DESC } }
            limit: 1000
            filter: { frontmatter: { type: {eq: "project" } } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        slug
                    }
                }
            }
        }
    }
    ` );
  
	if ( result.errors ) {
		throw result.errors;
	}
	
	// create project pages
	const projects = result.data.allMarkdownRemark.edges;
  
	projects.forEach( edge => {
		const slug = edge.node.frontmatter.slug;
  
		if ( !slug ) {
			// eslint-disable-next-line no-console
			console.warn( `Missing slug for post ID: ${edge.node.id}` );
			return; // skip creating this page
		}
  
		actions.createPage( {
			path: slug,
			component: require.resolve( './src/templates/blog-post.js' ),
			context: { slug },
		} );
	} );
};

