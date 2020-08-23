const path = require('path');

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    // Query for markdown nodes to use in creating pages.
    const result = await graphql(
      `
        {
          allMarkdownRemark {
            edges {
              node {
                html
                id
                frontmatter {
                  path,
                  date,
                  author,
                  title
                }
                timeToRead
              }
            }
          }
        }
      `
    )
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query on createPages `)
      return
    }
    // Create pages for each markdown file.
    const blogPostTemplate = path.resolve(`src/templates/blog-template.js`)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const path = node.frontmatter.path
      createPage({
        path,
        component: blogPostTemplate,
      })
    })
  }
