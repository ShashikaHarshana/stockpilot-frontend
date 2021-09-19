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
import { Link } from 'react-router-dom'
import Form from '../components/Form'
import Axios from 'axios'

const initialValues = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}
const url = '#'

const SignUp = () => {
  const [user, setUser] = useState(initialValues)
  const theme = useTheme()

  const handleChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log('submitted')
    Axios.post(url, {
      user: user
    }).then(resp => {
      console.log(resp.data)
    })
    setUser(initialValues)
  }

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

            <form onSubmit={handleSubmit}>
              <Grid sx={{ marginTop: '1rem' }}>
                <Controls.Input
                  fullWidth
                  label='First Name'
                  name='firstName'
                  value={user.firstName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid sx={{ marginTop: '1rem' }}>
                <Controls.Input
                  fullWidth
                  label='Last Name'
                  name='lastName'
                  value={user.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid sx={{ marginTop: '1rem' }}>
                <Controls.Input
                  fullWidth
                  label='Email'
                  name='email'
                  value={user.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid sx={{ marginTop: '1rem' }}>
                <Controls.Input
                  fullWidth
                  label='Password'
                  name='password'
                  type='password'
                  value={user.password}
                  onChange={handleChange}
                />
              </Grid>

              <Controls.Button
                color='secondary'
                text='sign up'
                type='submit'
                fullWidth
              />
            </form>
            <Typography>
              Already have an account?{' '}
              <Button
                component={Link}
                to='/sign_in'
                variant='text'
                sx={{ color: theme.palette.primary.main }}
              >
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
