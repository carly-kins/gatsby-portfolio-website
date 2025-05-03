import * as React from 'react';

const Section = ( { children, section } ) => {
	return (
		<>
			<section>
				<h2 className="section-header" id={section.id}>{section.heading}</h2>
				<p className="section-description">{section.description}</p>
				{children}
			</section>
		</>
	);
};

export default Section;