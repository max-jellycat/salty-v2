import { SheetsRegistry } from 'jss'
import {
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#2ecc71',
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  }
}

function getPageContext() {
  if (!process.browser) {
    return createPageContext()
  }

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}

export default getPageContext
