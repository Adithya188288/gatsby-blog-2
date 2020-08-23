import React from 'react';
import { graphql, Link } from 'gatsby';

function BlogTemplate({ data }) {
    return (
        <div>
            <Link to="/">Go back</Link>
            <br></br>
            <h2>{data.markdownRemark.frontmatter.title}</h2>
            <h4>{`Posted By - ${data.markdownRemark.frontmatter.author}`} on {data.markdownRemark.frontmatter.date}</h4>
            <p>Read Time - {data.markdownRemark.timeToRead}</p>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        </div>
    );
}


export const blogContent = graphql`
    query blogTemplateQuery($path: String) {
        markdownRemark(frontmatter:{path:{eq:$path}}){
            html
            frontmatter{
              title
              path
              date
              author
            }
            timeToRead
          }
    }
`;


export default BlogTemplate;
