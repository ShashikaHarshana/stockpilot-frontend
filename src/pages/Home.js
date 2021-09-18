import React from 'react'
import topRightImg from '../svgs/home/topRight.svg'
import topImg from '../svgs/home/topImg.svg'
import { Button, Typography } from '@mui/material'
import ImageCard from '../components/ImageCard'
import cardsLeft from '../svgs/home/cardsLeft.svg'
import cardsRight from '../svgs/home/cardsRight.svg'
import middleImg from '../svgs/home/middleImg.svg'
import botmLeft from '../svgs/home/botmLeft.svg'
import elipse from '../svgs/home/elipse.svg'

import { useTheme } from '@emotion/react'
import { Link } from 'react-router-dom'

const Home = () => {
  const theme = useTheme()

  return (
    <main>
      <img
        src={topRightImg}
        alt=''
        style={{
          position: 'absolute',
          top: '-10px',
          left: '-40px',
          height: '110px',
          width: '200px'
        }}
      />
      <img
        src={cardsLeft}
        alt=''
        style={{
          position: 'absolute',
          top: '55rem',
          left: '0rem'
        }}
      />
      <img
        src={cardsRight}
        alt=''
        style={{
          position: 'absolute',
          top: '70rem',
          left: '58rem'
        }}
      />
      <img
        src={elipse}
        alt=''
        style={{
          position: 'absolute',
          top: '50rem',
          left: '-5rem'
        }}
      />
      <section
        style={{
          minHeight: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          position: 'relative'
        }}
      >
        <article
          style={{
            width: '70%',
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            position: 'absolute',
            top: '14rem'
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
            <Typography variant='h2'>Smart Investing Platform</Typography>
            <Typography sx={{ width: '80%', marginTop: '2rem' }}>
              The one stop website for all your stock and crypto analysis needs
              without any commission or deposits.
            </Typography>
            <Button
              component={Link}
              to='/sign_up'
              sx={{
                width: '25%',
                marginTop: '2.5rem',
                p: '10px 25px',
                borderRadius: '30px'
              }}
              variant='contained'
              m
              color='secondary'
            >
              get started
            </Button>
          </div>
          <div>
            <img src={topImg} alt='img' />
          </div>
        </article>
      </section>
      <section
        style={{
          minHeight: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          position: 'relative'
        }}
      >
        <article
          style={{
            width: '70%',
            display: 'flex',
            justifyContent: 'space-around',
            alignContent: 'center',
            position: 'absolute',
            top: '8rem',
            margin: '0 auto'
          }}
        >
          <ImageCard
            title='Crypto Currency'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue nunc, tempor at congue a, efficitur at sapien. Sed efficitur molestie ex, nec sagittis ipsum.'
            btn='crypto'
            imgNo='1.svg'
          />
          <ImageCard
            title='Stock Market'
            subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue nunc, tempor at congue a, efficitur at sapien. Sed efficitur molestie ex, nec sagittis ipsum.'
            btn='Stock'
            imgNo='2.png'
          />
        </article>
      </section>
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          position: 'relative'
        }}
      >
        <article
          style={{
            width: '70%',
            display: 'flex',
            justifyContent: 'space-around',
            alignContent: 'space-between',
            position: 'absolute',
            top: '20rem',
            margin: '0 auto'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              transform: 'translateX(5rem)',
              justifyContent: 'center'
            }}
          >
            <Typography variant='h3'>
              Manage your own{' '}
              <span style={{ color: theme.palette.secondary.main }}>
                Watchlist
              </span>{' '}
              of favourite{' '}
              <span style={{ color: theme.palette.primary.main }}>Crypto</span>{' '}
              and{' '}
              <span style={{ color: theme.palette.primary.main }}>Stock</span>
            </Typography>

            <Typography
              variant='subtitle1'
              sx={{ width: '80%', marginTop: '2rem' }}
            >
              The one stop website for all your stock and crypto analysis needs
              without any commission or deposits.
            </Typography>
          </div>
          <div style={{ transform: 'translateX(5rem)' }}>
            <img src={middleImg} alt='' style={{}} />
          </div>
        </article>
      </section>
      ;
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          position: 'relative'
        }}
      >
        <article
          style={{
            width: '70%',
            display: 'flex',
            justifyContent: 'space-around',
            alignContent: 'space-between',
            position: 'absolute',
            top: '20rem',
            margin: '0 auto'
          }}
        >
          <div style={{ transform: 'translateX(5rem)' }}>
            <img
              src={botmLeft}
              alt=''
              style={{ position: 'absolute', left: '-33rem', top: '-55rem' }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              transform: 'translate(20rem,-10rem)',
              justifyContent: 'center'
            }}
          >
            <Typography variant='h3'>
              Get Notified{' '}
              <span style={{ color: theme.palette.secondary.main }}>
                24 / 7
              </span>
            </Typography>
            <Typography
              variant='subtitle1'
              sx={{ marginTop: '2rem', width: '90%' }}
            >
              The one stop website for all your stock and crypto analysis needs
              without any commission or deposits.
            </Typography>
            <Button
              component={Link}
              to='/sign_up'
              sx={{
                width: '25%',
                marginTop: '2.5rem',
                p: '10px 25px',
                borderRadius: '30px'
              }}
              variant='contained'
              color='secondary'
            >
              get started
            </Button>
          </div>
        </article>
      </section>
    </main>
  )
}
export default Home
