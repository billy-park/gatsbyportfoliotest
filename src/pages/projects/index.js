import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import {portfolio, piece} from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes
  console.log(data);

  return (
    <Layout>
      <div className={portfolio}>
        <h1>Portfolio</h1>
      </div>
      <div className={piece}>
        {projects.map(project => (
          <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
            <div>
              <GatsbyImage image={ getImage(project.frontmatter.thumb) } alt="" />
              <h3>{ project.frontmatter.title }</h3>
              <p>{ project.frontmatter.stack }</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsPage {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        stack
        slug
        date
        title
        thumb {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
            )
          }
        }
      }
      id
    }
  },
}
`
