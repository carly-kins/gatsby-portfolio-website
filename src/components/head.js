import * as React from 'react';
// https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component
export function Head( {location, params, data, pageContext} ) {
	return (
		<>
			<html lang="en" />
			<body className="my-body-class" />
			<title>{pageContext.title}</title>
			<link rel="preconnect" href="https://fonts.googleapis.com"></link>	
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
			<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
			<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet"></link>
		</>
	);
}