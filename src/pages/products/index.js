import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import {portfolio, piece} from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Products({ data }) {
  console.log(data);
  const products = data.allContentfulProduct.edges
  return (
    <Layout>
      <div className={portfolio}>
        <h1>Products</h1>
      </div>
      <div className={piece}>
        {products.map(product => (
          <Link to={"/products/" + product.node.id} key={product.id}>
            <div>
              <GatsbyImage image={ getImage(product.node.productImage) } alt="" />
              <h3>{ product.node.productName }</h3>
              <p>{ product.node.productDescription }</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
query Products {
  allContentfulProduct {
    edges {
      node {
        id
        productName
        productImage {
          gatsbyImageData
        }
        productDescription
      }
    }
  }
}`