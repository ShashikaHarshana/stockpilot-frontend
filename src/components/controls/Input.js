import React from 'react'
import { TextField } from '@material-ui/core'

export default function Input (props) {
  const { name, label, value, onChange, error = null, ...other } = props
  return (
    <TextField
      sx={{ marginTop: '1rem', border: '1px solid red' }}
      variant='outlined'
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  )
}
