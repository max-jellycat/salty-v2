import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  NavbarItem,
  NavbarDropdown,
  NavbarLink,
  Button,
  Icon,
} from 'bloomer'

const Header = () => {
  const [isActive, setActive] = useState(false)

  const onClickNav = e => {
    setActive(!isActive)
  }

  return (
    <StaticQuery
      query={headerQuery}
      render={({
        allMarkdownRemark: { group: tags },
        site: {
          siteMetadata: { title },
        },
      }) => (
        <>
          <Navbar isColor="dark">
            <NavbarBrand>
              <NavbarItem>{title}</NavbarItem>
              <NavbarItem isHidden="desktop">
                <Icon className="fab fa-github" />
              </NavbarItem>
              <NavbarItem isHidden="desktop">
                <Icon className="fab fa-twitter" style={{ color: '#55acee' }} />
              </NavbarItem>
              <NavbarBurger isActive={isActive} onClick={onClickNav} />
            </NavbarBrand>
            <NavbarMenu isActive={isActive} onClick={onClickNav}>
              <NavbarStart>
                <NavbarItem href="/">Home</NavbarItem>
                <NavbarItem hasDropdown isHoverable>
                  <NavbarLink>Tags</NavbarLink>
                  <NavbarDropdown className="tags-dropdown">
                    {tags.map(tag => (
                      <NavbarItem href="#/">
                        <span className="tags-dropdown--tag">
                          {tag.fieldValue}
                        </span>
                        <span className="tags-dropdown--count">
                          {tag.totalCount}
                        </span>
                      </NavbarItem>
                    ))}
                  </NavbarDropdown>
                </NavbarItem>
                <NavbarItem href="/games">Games</NavbarItem>
              </NavbarStart>
              <NavbarEnd>
                <NavbarItem
                  href="https://github.com/AlgusDark/bloomer"
                  isHidden="touch"
                >
                  <Icon className="fab fa-github" />
                </NavbarItem>
                <NavbarItem
                  href="https://twitter.com/AlgusDark"
                  isHidden="touch"
                >
                  <Icon
                    className="fab fa-twitter"
                    style={{ color: '#55acee' }}
                  />
                </NavbarItem>
                <NavbarItem>
                  <Button
                    id="twitter"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://bloomer.js.org"
                    target="_blank"
                    href="https://twitter.com/intent/tweet?text=bloomer:
                    a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark"
                  >
                    <Icon className="fab fa-twitter" />
                    <span>Tweet</span>
                  </Button>
                </NavbarItem>
              </NavbarEnd>
            </NavbarMenu>
          </Navbar>
        </>
      )}
    />
  )
}

export default Header

export const headerQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
