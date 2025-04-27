import * as React from 'react';
import { Link } from 'gatsby';

const Cards = ( {cards} ) => {
	return (
		<div className='container'>
			<ul>
				{ cards.map( ( card, index ) => (
					<li key={index}>
						<h3>
							{/*Move out when styling card*/}
							<Link to={card.node.frontmatter.slug}>{card.node.frontmatter.title}</Link>
						</h3>
					</li>
				) ) }
			</ul>
		</div>
	);
};

export default Cards;