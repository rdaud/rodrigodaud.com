import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/common"
import { Intro, Content, Links } from "../components/project"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
       <Intro
            title={frontmatter.title}
            location={frontmatter.location}
            industry={frontmatter.industry}
            client={frontmatter.client}
            timeline={frontmatter.timeline}
        />
        <Links
            sections={frontmatter.sections}
        />
        <Content>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        client
        industry
        location
        timeline
        tags
        sections
      }
    }
  }
  `