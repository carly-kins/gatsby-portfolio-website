import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Hero = () => {

	const data = useStaticQuery( graphql`
        query {
            homepage {
                hero {
                    title
                }
            }
        }
    ` );

	const heroContent = data.homepage.hero;

	return (
		<section className="hero">
			<div className="container">
				<h1>{heroContent.title}</h1>
				<p>Exploring the world of Gatsby and React!</p>
				<Link to="/" className="btn button btn-primary">Learn More</Link>
			</div>
		</section>
	);
};

export default Hero;