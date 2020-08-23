import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";

const Blog = ({ data }) => {
    return (
        <Layout>
            <SEO title="Blog" />
            {data.allMarkdownRemark.edges.map(post => {
                return (
                <div key={post.node.id} style={{margin:'25px', background:'#333', color:"#fff", padding:'25px'}}>
                    <h3>{post.node.frontmatter.title}</h3>
                    <small>Posted By - {`${post.node.frontmatter.author}`} on {post.node.frontmatter.date}</small>
                    <br></br>
                    <small>Read Time - {` ${post.node.timeToRead} min`}</small>
                    <br></br>
                <Link to={post.node.frontmatter.path}>Read More</Link>
                </div>
                );
            })}
        </Layout>
    );
};


export const blogQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  author
                  date
                  path
                  title
                }
                excerpt
                timeToRead
              }
            }
          }
    }
`;

export default Blog;
