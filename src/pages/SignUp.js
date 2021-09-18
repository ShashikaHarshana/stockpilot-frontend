import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { Box } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import signUpImg from '../svgs/signUp/signUpImg.svg'
import { useTheme } from '@emotion/react'
import Controls from '../components/controls/Controls'

const initialValues = {
  name: '',
  email: ''
}

const SignUp = () => {
  const [user, setUser] = useState(initialValues)
  const theme = useTheme()
  return (
    <div style={{ minHeight: '100vh' }}>
      <Grid
        container
        item
        sx={{
          margin: '0 auto',
          marginTop: '10rem',
          width: '70%',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Grid item xs={6}>
          <img src={signUpImg} alt='' />
        </Grid>
        <Grid item xs={6} s>
          <Paper
            elevation={8}
            sx={{
              height: '100%'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center'
              }}
            >
              <Typography
                variant='h3'
                sx={{ margin: '0 auto', marginBottom: '2rem' }}
              >
                Welcome to{' '}
                <span style={{ color: theme.palette.primary.main }}>
                  STOCKPILOT
                </span>
              </Typography>

              <Grid container sx={{}}>
                <Controls.Input
                  sx={{
                    width: '70%',
                    border: '1px solid blue',
                    margin: '0 auto'
                  }}
                  label='Name'
                  value={user.name}
                  name='name'
                  onChange={() => {
                    console.log('name')
                  }}
                />
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default SignUp
