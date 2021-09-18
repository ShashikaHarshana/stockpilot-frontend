import React from 'react'
import { Button as MuiButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1)
  },
  label: { textTransform: 'capitalize', color: 'primary' }
}))

export default function Button (props) {
  const { variant, text, size, color, onClick, ...other } = props
  const classes = useStyles()
  return (
    <MuiButton
      classes={{ root: classes.root, label: classes.label }}
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  )
}
