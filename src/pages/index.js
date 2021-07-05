import { Link } from "gatsby"
import React from "react"
import Layout from '../components/Layout'
import {header, btn} from '../styles/home.module.css'
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>nice</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <StaticImage src="../images/banner.png" alt="Banner" placeholder="blurred"/>
      </section>
    </Layout>
  )
}