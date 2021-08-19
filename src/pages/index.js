import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import events from "../../content/events/event.json"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = events.eventList
  // const 
  console.log(posts)

  // if (posts.length === 0) {
  //   return (
  //     <Layout location={location} title={siteTitle}>
  //       <Seo title="All posts" />
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     </Layout>
  //   )
  // }

  return (
    
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <ol style={{ listStyle: `none` }}>
        {posts.map((post, i) => {
          // const title = events.eventList[i].title 
          return (
            <li key={i}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to="/" itemProp="url">
                      <span itemProp="headline">{events.eventList[i].title}</span>
                    </Link>
                  </h2>
                  <small>{events.eventList[i].date}</small>
                </header>
                {/* <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: events.eventList[i].details || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section> */}
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
