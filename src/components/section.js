import * as React from 'react';

const Section = ( { children, section } ) => {
	return (
		<>
			<section>
				<h2 id={section.id}>{section.heading}</h2>
				<p>{section.description}</p>
				{children}
			</section>
		</>
	);
};

export default Section;