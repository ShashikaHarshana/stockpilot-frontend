import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/system'
import { Grid, IconButton, Typography } from '@mui/material'
import signUpImg from '../svgs/signUp/signUpImg.svg'
import { useTheme } from '@emotion/react'
import Controls from '../components/controls/Controls'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { Button } from '@mui/material'

const initialValues = {
  name: '',
  email: ''
}

const SignUp = () => {
  const [user, setUser] = useState(initialValues)
  const theme = useTheme()
  return (
    <div>
      <Grid container sx={{ width: '70%', margin: '6rem auto' }}>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          item
          xs={6}
        >
          <img
            src={signUpImg}
            style={{ height: '442px', width: '480px' }}
            alt=''
          />
        </Grid>
        <Grid item xs={6} s>
          <Paper
            elevation={8}
            sx={{
              height: '600px',
              width: '620px',
              padding: '2.5rem 3.5rem'
            }}
          >
            <Typography
              variant='h4'
              sx={{
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              Welcome to{' '}
              <span
                style={{
                  color: theme.palette.primary.main,
                  marginLeft: '1rem'
                }}
              >
                STOCKPILOT
              </span>
            </Typography>
            <Grid
              container
              sx={{
                margin: '0 auto',
                marginTop: '1rem',
                marginBottom: '2rem'
              }}
            >
              <Grid
                item
                xs={6}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <IconButton disableRipple>
                  <GoogleIcon />
                  <Typography sx={{ marginLeft: '1rem', color: '#222' }}>
                    Sign in with Google
                  </Typography>
                </IconButton>
              </Grid>

              <Grid
                item
                xs={6}
                sx={{ display: 'flex', justifyContent: 'center' }}
              >
                <IconButton disableRipple>
                  <FacebookIcon />
                  <Typography sx={{ marginLeft: '1rem', color: '#222' }}>
                    Sign in with facebook
                  </Typography>
                </IconButton>
              </Grid>
            </Grid>
            <Grid sx={{ marginTop: '1rem' }}>
              <Controls.Input fullWidth label='Email' name='email' />
            </Grid>
            <Grid sx={{ marginTop: '1rem' }}>
              <Controls.Input
                fullWidth
                label='Password'
                name='password'
                type='password'
              />
            </Grid>
            <Grid sx={{ marginTop: '1rem' }}>
              <Controls.Input
                fullWidth
                label='Confirm Password'
                name='password'
                type='password'
              />
            </Grid>
            <Controls.Button color='secondary' text='sign up' fullWidth />
            <Typography>
              Already have an account?{' '}
              <Button variant='text' sx={{ color: theme.palette.primary.main }}>
                Log in
              </Button>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default SignUp
