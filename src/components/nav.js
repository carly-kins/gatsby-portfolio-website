import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useStaticQuery, graphql } from 'gatsby';

const Navigation = () => {

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
			</div>
		</Navbar>
	);
};

export default Navigation;