import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import SEO from './SEO'
import Navbar from './Navbar'

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    },
  },
})

const Layout = ({ children, classes }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO />
        <Navbar siteTitle={data.site.siteMetadata.title} />
        <div className={classes.root}>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Layout)
