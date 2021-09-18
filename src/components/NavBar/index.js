import { AppBar, Button, Grid, Tabs, Toolbar, Tab } from '@mui/material'
import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import logo from '../../svgs/home/stockPilot.svg'
import SearchBox from './SearchBox'
const NavBar = () => {
  return (
    <div>
      <AppBar
        position='static'
        elevation={0}
        sx={{ background: 'none', marginTop: '2rem' }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: ' 70%',
            margin: '0 auto',
            justifyContent: 'space-between'
          }}
        >
          <Grid item component={Link} to='/'>
            <img src={logo} alt='Stockpilot' />
          </Grid>
          <Tabs sx={{ transform: 'translateX(150px)' }}>
            <Tab
              disableRipple
              label='Home'
              component={Link}
              to='/'
              sx={{ marginLeft: '20px' }}
            />
            <Tab
              label='Stock'
              component={Link}
              to='/'
              sx={{ marginLeft: '20px' }}
            />
            <Tab
              label='Cripto'
              component={Link}
              to='/'
              sx={{ marginLeft: '20px' }}
            />
          </Tabs>
          <Grid item sx={{ transform: 'translateX(65px)' }}>
            <SearchBox />
          </Grid>
          <Grid item>
            <Button
              component={Link}
              to='/sign_in'
              variant='text'
              sx={{
                '&:hover': {
                  backgroundColor: '#fff',
                  color: '#222'
                },
                marginRight: '2rem',
                color: '#707070'
              }}
            >
              Log In
            </Button>
            <Button
              component={Link}
              to='/sign_up'
              variant='contained'
              color='secondary'
              sx={{
                borderRadius: '40px',
                p: '5px 25px'
              }}
            >
              Sign Up
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
