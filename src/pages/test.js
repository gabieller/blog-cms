import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const BlogIndex = ({ location }) => {
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

  if (events.length === 0) {
    return (
      <Layout location={location}>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  console.log(events)
  return (
    <div>
      <h1>Testing page</h1>
      <ol>
        <li>
          <div>
          <h2>
          {events.eventList[0].title}
          </h2>
          </div>
          <span>
          {events.eventList[0].details}
          </span>
        </li>
        <li>
          <div>
          <h2>
          {events.eventList[1].title}
          </h2>
          </div>
          <span>
          {events.eventList[1].details}
          </span>
        </li>
      </ol>
    </div>
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
  }
`
