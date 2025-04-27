import * as React from 'react';
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useStaticQuery, graphql } from 'gatsby';

// TODO: Move check for reduced animation out of nav and into head so I can set the body class, send into nav. 
const Navigation = () => {
	const [animationsEnabled, setAnimationsEnabled] = useState( true );

	const toggleAnimations = () => {
		setAnimationsEnabled( ( state ) => !state );
	};

	useEffect( () => {
		const prefersReducedMotion = window.matchMedia( '(prefers-reduced-motion: reduce)' ).matches;
		const storageDisabled = localStorage.getItem( 'animationsEnabled' ) === 'false';
		if ( prefersReducedMotion || storageDisabled ) {
			setAnimationsEnabled( false );
		}
	}, [] );

	useEffect( () => {
		if ( animationsEnabled ) {
			document.body.classList.remove( 'no-animations' );
		} else {
			document.body.classList.add( 'no-animations' );
		}

		localStorage.setItem( 'animationsEnabled', animationsEnabled );
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
					<span>
						{animationsEnabled ? 
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg> 
							: 
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
						}	
					</span>
					<span className='visually-hidden'>{animationsEnabled ? 'Disable Animations' : 'Enable Animations'}</span>
				</button>
			</div>
			
		</Navbar>
	);
};

export default Navigation;