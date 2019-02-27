import React from 'react'
import {
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
  Nav,
  NavLeft,
  NavCenter,
  NavRight,
  NavItem,
  Tabs,
  Tab,
  TabLink,
  TabList,
  Container,
  Title,
  Icon,
} from 'bloomer'

const Navbar = () => (
  <>
    <Hero isColor="info" isSize="medium">
      <HeroHeader>
        <Nav>
          <NavLeft>
            <NavItem isBrand>Bloomer</NavItem>
          </NavLeft>
          <NavCenter>
            <NavItem>
              <Icon className="fa fa-github" />
            </NavItem>
            <NavItem>
              <Icon className="fa fa-twitter" />
            </NavItem>
          </NavCenter>
          <NavRight isMenu>
            <NavItem>Home</NavItem>
            <NavItem>Documentation</NavItem>
          </NavRight>
        </Nav>
      </HeroHeader>

      <HeroBody>
        <Container hasTextAlign="centered">
          <Title>Title</Title>
        </Container>
      </HeroBody>

      <HeroFooter>
        <Tabs isBoxed isFullWi dth>
          <Container>
            <TabList>
              <Tab isActive>
                <TabLink>Overview</TabLink>
              </Tab>
              <Tab>
                <TabLink>Grid</TabLink>
              </Tab>
              <Tab>
                <TabLink>Element</TabLink>
              </Tab>
              <Tab>
                <TabLink>Components</TabLink>
              </Tab>
              <Tab>
                <TabLink>Layout</TabLink>
              </Tab>
            </TabList>
          </Container>
        </Tabs>
      </HeroFooter>
    </Hero>
  </>
)

export default Navbar
