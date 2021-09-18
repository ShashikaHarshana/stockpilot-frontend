import { createTheme } from '@material-ui/core'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00AEFF'
    },
    secondary: {
      main: '#E43066'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontSize: '1rem',
          borderRadius: '10px'
        }
      },
      defaultProps: {
        disableRipple: true
      }
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          '&:hover': {
            color: '#222'
          },
          fontSize: '1rem'
        }
      }
    }
  }
})

export default theme
