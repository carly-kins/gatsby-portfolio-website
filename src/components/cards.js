import * as React from 'react';
//import { Link } from 'gatsby';
import { default as Button } from './button';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CardImage = ( {card} ) => {
	const featuredImg = getImage( card.project.featuredImage?.childImageSharp?.gatsbyImageData );

	return (
		<div className='col-12 col-lg-6'>
			{ featuredImg ? <GatsbyImage image={featuredImg} /> : '' }
		</div>
	);
};

const CardText = ( {card} ) => {
	return (
		<div className='col-12 col-lg-6'>
			<h3>{card.project.title}</h3>
			<p>
				{ card.project.skills ? card.project.skills.map( ( skill, index ) => {
					return <span key={index} className={`badge badge--${skill} text-bg-secondary`}>{skill}</span>;
				} ) : '' }
			</p>
			<p>{card.project.description}</p>
			<Button link={card.slug} text={'Visit Github'} visuallyHidden={true} type={'github'} icon={true} />
		</div>
	);
};

const Cards = ( {cards, title, description} ) => {
	return (
		<div className='project-cards'>
			{ title ? <h2>{title}</h2> : '' }
			{ description ? <p>{description}</p> : '' }
			<ul className='project-cards__cards'>
				{ cards.map( ( card, index ) => {
					{/*Switch back and forth even and odd cards */}
					card = card.node.frontmatter;
					return (
						<li key={index} className='project-cards__card'>
							<div className='row'>
								{ index % 2 === 0 ?
									<>
										<CardImage card={card} />
										<CardText card={card}/>
									</>
									:
									<>
										<CardText card={card}/>
										<CardImage card={card} />
									</>
								}
							</div>
						</li>
					);
				}
				) }
			</ul>
		</div>
	);
};

export default Cards;