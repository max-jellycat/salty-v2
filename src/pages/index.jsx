import React from 'react'
import { Section, Container, Hero, Title } from 'bloomer'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

const IndexPage = ({ classes }) => (
  <Layout>
    <Hero style={{ backgroundImage: `url('/uploads/arale.png')` }}>
      <div className="mask" />
      <Title isSize="1" tag="h1">
        Latest Stories
      </Title>
    </Hero>
    <Section>
      <Container>
        <BlogRoll />
      </Container>
    </Section>
  </Layout>
)

export default IndexPage
