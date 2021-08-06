import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

import './index.css'

import HomePage from 'pages/home-page'

import * as serviceWorker from './serviceWorker'
import './fonts/RussoOne-Regular.ttf'

const theme = createTheme({
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 20
        }
      }
    }
  })

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HomePage />
  </ThemeProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
