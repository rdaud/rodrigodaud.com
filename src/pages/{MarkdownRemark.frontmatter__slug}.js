import { graphql } from "gatsby";
import * as React from "react";
import { Layout, Container } from "../components/common";
import { Wrapper } from "./styles.js";



export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
        <Wrapper as={Container}>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;