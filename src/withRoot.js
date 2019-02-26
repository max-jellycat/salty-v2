import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { loadCSS } from 'fg-loadcss/src/loadCSS'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'
import getPageContext from './getPageContext'

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props)
      this.muiPageContext = getPageContext()
    }

    componentDidMount() {
      loadCSS(
        'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
        document.querySelector('#insertion-point-jss')
      )
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return (
        <JssProvider generateClassName={this.muiPageContext.generateClassName}>
          <MuiThemeProvider
            theme={this.muiPageContext.theme}
            sheetsManager={this.muiPageContext.sheetsManager}
          >
            <CssBaseline />
            <Component {...this.props} />
          </MuiThemeProvider>
        </JssProvider>
      )
    }
  }

  return WithRoot
}

export default withRoot
