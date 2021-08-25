import React from 'react'

import { useHistory, useRouteMatch } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { createStyle } from './styles'

function Header() {    
  const classes = createStyle()
  let history = useHistory();
  return (
    <div className={classes.container}>
      <div className={classes.toolbar}>
        <Button disabled={!!useRouteMatch('/home')} className={classes.menuButton} color='inherit' onClick={() => history.push('/home')}>Inicio</Button>
        <Button disabled={!!useRouteMatch('/prices')} className={classes.menuButton} color='inherit' onClick={() => history.push('/prices')}>Planes</Button>
        <Button disabled={!!useRouteMatch('/mobile')} className={classes.menuButton} color='inherit' onClick={() => history.push('/mobile')}>Android App</Button>
        <Button disabled={!!useRouteMatch('/windows')} className={classes.menuButton} color='inherit' onClick={() => history.push('/windows')}>Windows App</Button>
        <Button disabled={!!useRouteMatch('/platform')} className={classes.menuButton} color='inherit' onClick={() => history.push('/platform')}>Plataforma</Button>
        <Button disabled={!!useRouteMatch('/apps')} className={classes.menuButton} color='inherit' onClick={() => history.push('/apps')}>Apps</Button>
      </div>
      <Typography classes={{h2: classes.h2}} variant='h2' align='center' component='h2'>
        JLC Solutions
      </Typography>
      <Typography classes={{h4: classes.h4}} variant='h4' align='center' component='h4'>
        A software development company
      </Typography>
    </div>
  )
}

export default Header
