import * as React from 'react';
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useStaticQuery, graphql } from 'gatsby';

const Navigation = () => {
	const [animationsEnabled, setAnimationsEnabled] = useState( true );

	const toggleAnimations = () => {
		setAnimationsEnabled( ( state ) => !state );
	};

	useEffect( () => {
		// Check if the user has a preference for reduced motion
		const prefersReducedMotion = window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;
	
		if ( prefersReducedMotion ) {
			setAnimationsEnabled( false );
		}

		if ( animationsEnabled ) {
			document.body.classList.remove( 'no-animations' );
		} else {
			document.body.classList.add( 'no-animations' );
		}
	}, [animationsEnabled] );

	const data = useStaticQuery( graphql`
		query {
			markdownRemark(fileAbsolutePath: {regex: "/global.md/"}) {
				frontmatter {
					nav {
						title
						url
					}
				}
			}
		}
	` );

	const navItems = data.markdownRemark.frontmatter.nav;
	// TODO: add skipnav
	// add a button to reduce animations
	return (
		<Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
			<div className='container'>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav BsPrefixRefForwardingComponent="ul" className="me-auto">
						<ul className="navbar-nav">
							{navItems.map( ( navItem, index ) => (
								<li className="nav-item" key={index}> <Nav.Link href={navItem.url}>{navItem.title}</Nav.Link></li>
							) )}
						</ul>
					</Nav>
				</Navbar.Collapse>
				<button className="btn button btn-primary" onClick={toggleAnimations}>
					{animationsEnabled ? 'Disable Animations' : 'Enable Animations'}
				</button>
			</div>
			
		</Navbar>
	);
};

export default Navigation;