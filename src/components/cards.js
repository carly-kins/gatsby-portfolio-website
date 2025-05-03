import * as React from 'react';
//import { Link } from 'gatsby';
import { default as Button } from './button';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CardImage = ( {card, sm, lg} ) => {
	const featuredImg = getImage( card.project.featuredImage?.childImageSharp?.gatsbyImageData );

	return (
		<div className={sm ? 'project-cards__img--sm project-cards__img' : ( lg ? 'project-cards__img--lg project-cards__img' : 'project-cards__img' )}>
			{ featuredImg ? <GatsbyImage image={featuredImg} /> : '' }
		</div>
	);
};

const CardText = ( {card} ) => {
	return (
		<div className='project-cards__content'>
			<h3>{card.project.title}</h3>
			<p className='project-cards__badges'>
				{ card.project.skills ? card.project.skills.map( ( skill, index ) => {
					return <span key={index} className={`badge badge--${skill}`}>{skill}</span>;
				} ) : '' }
			</p>
			<p className='project-cards__text' dangerouslySetInnerHTML={{ __html: card.project.description }}></p>
			<div className='project-cards__footer'>
				<Button link={card.slug} text={'Visit Github'} visuallyHidden={true} type={'github'} icon={true} />
				<Button link={card.slug} text={'Visit Site'} visuallyHidden={true} type={'external'} icon={true} />
			</div>
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
							{ index % 2 === 0 ?
								<>
									<CardImage card={card} />
									<CardText card={card}/>
								</>
								:
								<>
									<CardImage card={card} sm={true} />
									<CardText card={card}/>
									<CardImage card={card} lg={true} />
								</>
							}
						</li>
					);
				}
				) }
			</ul>
		</div>
	);
};

export default Cards;