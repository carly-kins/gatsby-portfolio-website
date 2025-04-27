import * as React from 'react';
import { Link } from 'gatsby';

const Hero = ( {hero} ) => {

	return (
		<section className="hero">
			<div className="container">
				<h1>{hero.heading}</h1>
				<p>{hero.subheading}</p>
				<Link to="/" className="btn button btn-primary">Learn More</Link>
			</div>
		</section>
	);
};

export default Hero;