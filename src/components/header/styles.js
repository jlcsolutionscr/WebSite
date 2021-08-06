import { makeStyles, createStyles } from '@material-ui/core/styles'
import BannerImage from 'assets/img/banner.jpg'

export const createStyle = makeStyles(theme => createStyles({
  container: {
    backgroundImage: `url(${BannerImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `100% 100%`,
    backgroundColor: `white`,
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: 100,
    paddingBottom: '20px',
    minWidth: '370px'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    color: 'white',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0,0.65)',
    minWidth: '370px',
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'white',
      position: 'fixed',
      top: '105px',
    }
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: theme.spacing(16),
    backgroundColor: 'rgba(255,255,255,0.25)',
    '&:disabled': {
      color: 'rgba(255,255,255,0.65)',
      backgroundColor: 'rgba(255,255,255,0.15)'
    },
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'rgba(0,0,0,0.65)',
      '&:disabled': {
        color: 'rgba(255,255,255,0.65)',
        backgroundColor: 'rgba(0,0,0,0.45)'
      },
      '&:hover': {
        color: 'black',
        backgroundColor: 'rgba(0,0,0,0.15)'
      },
    },
  },
  hideButton: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  h2: {
    marginTop: theme.spacing(2),
    color: '#247BA0',
    fontFamily: 'RussoOne',
    fontStyle: 'italic',
    fontSize: theme.typography.pxToRem(66),
    textShadow: '6px 6px 6px rgba(0,0,0,0.85)',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(40),
      marginTop: '10px'
    }
  },
  h4: {
    marginTop: theme.spacing(1),
    color: '#E2EBF1',
    fontFamily: 'RussoOne',
    fontStyle: 'italic',
    fontSize: theme.typography.pxToRem(22),
    textShadow: '3px 3px 4px rgba(0,0,0,0.85)',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.pxToRem(16),
    }
  }
}))
