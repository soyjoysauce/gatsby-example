import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import img from '../images/IMG_0004.jpg';
import Image from 'gatsby-image';

const getImages = graphql`
{
  fixed: file(relativePath: {eq: "IMG_0003.jpg"}) {
    childImageSharp {
      fixed(width: 300, grayscale:true) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "IMG_0001.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }
  example: file(relativePath: {eq: "IMG_0001.jpg"}) {
    childImageSharp {
#     default 800
      fluid(maxWidth: 100) {
        ...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }
}
`;

const Images = () => {
	const data =useStaticQuery(getImages);
	console.log(data);
	return (
		<section className="images">
			<article className="single-image">
				<h3>basic image</h3>
				<img src={img} width="100%"/>
				<h2>Content</h2>
			</article>
			<article className="single-image">
				<h3>fixed image/blur</h3>
				<Image fixed={data.fixed.childImageSharp.fixed}/>
				<h2>Content</h2>
			</article>
			<article className="single-image">
				<h3>fluid image/svg</h3>
				<Image fluid={data.fluid.childImageSharp.fluid}/>
				<div className="small">
					<Image fluid={data.fluid.childImageSharp.fluid}/>
					<h2>Content</h2>
				</div>
				<Image fluid={data.fluid.childImageSharp.fluid}/>
			</article>
		</section>
	);
};

export default Images;
