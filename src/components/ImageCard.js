import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const ImageCard = ({ title, subTitle, imgNo, btn }) => {
  return (
    <Card
      raised
      sx={{
        maxWidth: 575,
        maxHeight: 700,
        marginRight: '1rem'
      }}
    >
      <CardMedia
        sx={{
          width: '475px',
          margin: '0 auto',
          marginTop: '2.5rem',
          '& .MuiCardMedia-img': {
            height: '100px'
          }
        }}
        component='img'
        height={'420px'}
        image={`/img/card${imgNo}`}
        alt='stock or cripto'
      />
      <CardContent>
        <Typography
          sx={{ marginLeft: '2rem' }}
          gutterBottom
          variant='h4'
          component='div'
        >
          {title}
        </Typography>
        <Typography
          sx={{ marginLeft: '2rem' }}
          variant='body2'
          color='text.secondary'
        >
          {subTitle}
        </Typography>
        <Button
          size='large'
          sx={{ marginLeft: '1.5rem', fontSize: '1.35rem' }}
          variant='text'
          color='secondary'
        >
          {`Analyze ${btn}`}
          <span style={{ marginTop: '0.75rem' }}>
            <ArrowRightAltIcon
              fontSize='large'
              sx={{ marginLeft: '0.25rem' }}
            />
          </span>
        </Button>
      </CardContent>
    </Card>
  )
}

export default ImageCard
