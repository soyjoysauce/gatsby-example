/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
	// eslint-disable-next-line no-undef
	path:`.env.${process.env.NODE_ENV}`,
});
module.exports = {
	/* Your site config here */
	siteMetadata:{
		title:'Gatsby Portfolio Project',
		description:'Soy Gatsby Portfolio Project',
		author:'@soyB',
		data:['item 1', 'item-2'],
		person: { name: 'peter', age: 32},
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-transformer-sharp', 
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				// eslint-disable-next-line no-undef
				path: `${__dirname}/src/images/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				// eslint-disable-next-line no-undef
				path: `${__dirname}/src/posts/`,
			},
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: 'ie225sexwtt4',
				// Learn about environment variables: https://gatsby.dev/env-vars
				// eslint-disable-next-line no-undef
				accessToken: process.env.ACCESS_TOKEN,
			},
		},
	],
};
