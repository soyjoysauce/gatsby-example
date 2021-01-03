import React from 'react';
import Header from '../examples/Header';
import HeaderStatic from '../examples/HeaderStatic';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';

const examples = ({data}) => {
	const {site:{info:{author}}} = data;
	return (
		<Layout>
			<p>Hello from Examples</p>
			<Header />
			<HeaderStatic />
			<h5>author: { author }</h5>
		</Layout>
	);
};
export const data = graphql`
query {
  site{
    info:siteMetadata{
      title
      description
      author
      data
      person{
        name
        age
        
      }
      
    }
  }
}
`;
export default examples;
