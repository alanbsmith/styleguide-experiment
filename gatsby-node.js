exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allFile(filter: { extension: { eq: "md" } }) {
          edges {
            node {
              absolutePath
              relativeDirectory
              name
            }
          }
        }
      }
    `)
      .then(result => {
        if (result.errors) {
          return reject(result.errors)
        }

        // Create markdown pages.
        result.data.allFile.edges.forEach(
          ({ node: { absolutePath, relativeDirectory, name } }) => {
            createPage({
              path: `${relativeDirectory}/${name}`,
              component: absolutePath,
            })
          }
        )
      })
      .then(resolve)
  })
}









// const path = require("path");
//
// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators;
//
//   // const blogPostTemplate = path.resolve(`src/templates/markdownTemplate.js`);
//
//   return new Promise((resolve, reject)) => {
//
//   }
// }






//   graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               path
//               title
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors);
//     }
//
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: blogPostTemplate,
//         context: {}, // additional data can be passed via context
//       });
//     });
//   });
// };
