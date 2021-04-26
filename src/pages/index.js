import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const events = {
    eventList: [
      {
        date: "2021-04-26T16:25:59.122Z",
        title: "A Jornada Data Driven na Indústria 4.0",
        details:
          "Quer revolucionar seus processos industriais e preparar-se para o futuro da Indústria 4.0 com o poder dos dados? Participe deste evento!  Será um bate-papo imperdível com Giulliano Puga, fundador e diretor de criação da marca Labellamafia, e Matheus Dellagnelo, co-fundador e CEO da Indicium Tech sobre a revolução data driven na Indústria 4.0!  Inscreva-se!",
        place: "Online",
        participants1: "Giulliano Puga",
        participants2: "Matheus Dellagnelo",
        realization: "Indicium Tech",
      },
      {
        date: "2021-04-26T16:51:19.612Z",
        title: "Accelerating your data-driven journey",
        details:
          "Event covering the  practical challenges and opportunities faced by companies who are developing their data maturity",
        place: "Online",
        participants1: "Ricardo Hoerde",
        participants2: "Hudson Oliveira",
        participants3: "Matheus Dellagnelo",
        realization: "Indicium Tech",
      },
    ],
  }

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = events.eventList[1].title || post.fields.slug
          
          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{events.eventList[1].date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: events.eventList[1].details || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
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
