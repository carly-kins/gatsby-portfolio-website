import * as React from 'react';
import Navigation from './nav';

const Layout = ( { children, homepage } ) => {
	return (
		<>
			{!homepage ? <Navigation /> : ''}
			<main>
				{children}
			</main>
			{/*TODO: ADD FOOTER*/}
		</>
	);
};

export default Layout;