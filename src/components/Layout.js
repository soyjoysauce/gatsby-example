import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../components/layout.css';
const Layout = ({children}) => {
	return (
		<div className={styles}>
			<Navbar/>
			<main>{children}</main>
			<Footer/>
		</div>
	);
};

export default Layout;
