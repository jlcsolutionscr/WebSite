import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'

import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { ListIcon } from '../icons/icon'

import bannerImage from '../assets/img/banner.png'

import Loader from './loader'
import HomePage from './home-page/home-page'
import MobileAppPage from './mobile-app/mobile-app-page'
import WindowsAppPage from './windows-app/windows-app-page.js'
import PlatformPage from './platform/platform-page'
import DownloadsPage from './downloads/downloads-page'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#262626',
    color: 'white'
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  headerTitle: {
    flexGrow: 1,
    fontFamily: 'PT Sans',
    fontSize: theme.typography.pxToRem(20)
  },
  list: {
    width: 250
  },
  listItemText: {
    fontFamily: 'PT Sans',
    fontSize: theme.typography.pxToRem(18)
  },
  paperTop: {
    marginTop: '64px',
    borderRadius: 0,
    width: window.width,
    height: '126px',
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: theme.spacing(2)
  },
  paperCenter: {
    borderRadius: 0,
    padding: theme.spacing(2),
    backgroundColor: '#FAFAFA'
  },
  paperBottom: {
    backgroundColor: '#262626',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: window.width,
    height: '96px'
  },
  h2: {
    marginTop: theme.spacing(2),
    color: '#E7F2F8',
    fontFamily: 'RussoOne',
    fontStyle: 'italic',
    fontSize: theme.typography.pxToRem(70),
    textShadow: '6px 6px 6px rgba(0,0,0,0.85)'
  },
  h4: {
    marginTop: theme.spacing(1),
    color: '#E7F2F8',
    fontFamily: 'RussoOne',
    fontStyle: 'italic',
    textShadow: '3px 3px 4px rgba(0,0,0,0.85)'
  }
}))

function App(props) {
  const classes = useStyles()
  const [state, setState] = React.useState({
    loadingMessage: 'Downloading',
    drawerOpen: false,
    currentPage: 0,
    pageTitle: 'Página de inicio'
  })

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, drawerOpen: open })
  }

  const toggleCurrentPage = (pageId) => {
    let title = 'Página de inicio'
    switch(pageId) {
      case 0:
        title = 'Página de inicio'
        break
      case 1:
        title = 'Aplicación Android'
        break
      case 2:
        title = 'Aplicación Windows'
        break
      case 3:
        title = 'Plataforma de Servicios'
        break
      case 4:
        title = 'Descargas'
        break
      default:
        title = ''
    }
    setState({ ...state, pageTitle: title, currentPage: pageId, drawerOpen: false })
    window.scrollTo(0, 0)
  }

  const sideList = side => (
    <div
      className={classes.list}
      role='presentation'
    >
      <List>
        <ListItem button key='0' onClick={() => toggleCurrentPage(0)}>
          <ListItemText classes={{primary: classes.listItemText}} primary={'Página de inicio'} />
        </ListItem>
        <ListItem button key='1' onClick={() => toggleCurrentPage(1)}>
          <ListItemText classes={{primary: classes.listItemText}} primary={'Aplicación Android'}/>
        </ListItem>
        <ListItem button key='2' onClick={() => toggleCurrentPage(2)}>
          <ListItemText classes={{primary: classes.listItemText}} primary={'Aplicación Windows'} />
        </ListItem>
        <ListItem button key='3' onClick={() => toggleCurrentPage(3)}>
          <ListItemText classes={{primary: classes.listItemText}} primary={'Plataforma de Servicios'} />
        </ListItem>
        <ListItem button key='4' onClick={() => toggleCurrentPage(4)}>
          <ListItemText classes={{primary: classes.listItemText}} primary={'Descargas'} />
        </ListItem>
      </List>
    </div>
  )
  return (
    <div id='id_app_content' className={classes.root}>
      {props.loaderVisible && <Loader loaderText={state.loadingMessage} isLoaderActive={props.loaderVisible}/>}
      <AppBar classes={{colorDefault: classes.appBar}} position='fixed' color='default'>
        <Toolbar>
          <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu' onClick={toggleDrawer(true)}>
            <ListIcon />
          </IconButton>
          <Typography variant='h6' className={classes.headerTitle}>
            {state.pageTitle}
          </Typography>
          <Button variant='outlined' color='inherit'>Iniciar sesión</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={state.drawerOpen} onClose={toggleDrawer(false)}>
        {sideList('left')}
      </Drawer>
      <Paper className={classes.paperTop}>
        <Typography classes={{h2: classes.h2}} variant="h2" align='center' component="h2">
          JLC Solutions
        </Typography>
        <Typography classes={{h4: classes.h4}} variant="h4" align='center' component="h4">
          A software development company
        </Typography>
      </Paper>
      <Paper className={classes.paperCenter}>
        {state.currentPage === 0 && <HomePage onClick={toggleCurrentPage} />}
        {state.currentPage === 1 && <MobileAppPage />}
        {state.currentPage === 2 && <WindowsAppPage />}
        {state.currentPage === 3 && <PlatformPage />}
        {state.currentPage === 4 && <DownloadsPage />}
      </Paper>
      <Paper className={classes.paperBottom} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loaderVisible: state.ui.loaderVisible
  }
}

export default connect(mapStateToProps, null)(App)
