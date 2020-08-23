import React from 'react';
import Link from 'gatsby-link';
import Layout from "../components/layout";

const About = () => {
    return (
        <Layout>
            Hi from About Page
            <br></br>
            <Link to='/'>Go back</Link>
        </Layout>
    );
};


export default About;