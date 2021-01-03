import React from 'react';
import {useStaticQuery,graphql} from 'gatsby';
const getData = graphql`
{
  site{
    siteMetadata{
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
const Header = () => {
	const {site:{siteMetadata:{title,person:{name}}}} = useStaticQuery(getData);
  
	return (
		<div>
			<h1>Title: {title}</h1>
			<h1>Name: {name}</h1>
		</div>
	);
};

export default Header;
