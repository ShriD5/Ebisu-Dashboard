// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

const CustomInput = forwardRef((props, ref) => {
  return <TextField fullWidth {...props} inputRef={ref} label='Birth Date' autoComplete='off' />
})

const FormLayoutsSeparator = () => {
  // ** States
  const [language, setLanguage] = useState([])
  const [date, setDate] = useState(null)

  const [values, setValues] = useState({
    password: '',
    password2: '',
    showPassword: false,
    showPassword2: false
  })

  // Handle Password
  const handlePasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  // Handle Confirm Password
  const handleConfirmChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 })
  }

  const handleMouseDownConfirmPassword = event => {
    event.preventDefault()
  }

  // Handle Select
  const handleSelectChange = event => {
    setLanguage(event.target.value)
  }

  return (
    <Card>
      <CardHeader title='Generate your Invoice' titleTypographyProps={{ variant: 'h6' }} />
      <Divider sx={{ margin: 0 }} />
      <form onSubmit={e => e.preventDefault()}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant='body2' sx={{ fontWeight: 600 }}>
                1. Enter Your Details
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='bName' placeholder='Enter bName' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='bCode' placeholder='Enter bCode' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='bBuilding Number' placeholder='Enter bBuilding Number' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='bStreet' placeholder='Enter bStreet' />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='bCity' placeholder='Enter bCity' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='bCountry' placeholder='Enter bCountry' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='bZipCode' placeholder='Enter bCZipCode' />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='sName' placeholder='Enter sName' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='sCode' placeholder='Enter sCode' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='sAddress' placeholder='Enter sAddress' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='sEmailId' placeholder='Enter sEmail Id' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='sCurrency' placeholder='Enter sCurrency' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='sMobile Number' placeholder='Enter sMobileNo' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='sCity' placeholder='Enter sCity' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='sCountry' placeholder='Enter sCountry' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='sZipCode' placeholder='Enter sZipCode' />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='bShipping Address' placeholder='Enter bShipping Address' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='bShipping City' placeholder='Enter bShipping City' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='bShipping Zip ' placeholder='Enter bShipping Zip ' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='bShipping EmailId ' placeholder='Enter bShipping EmailId ' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='bShipping MobileNo' placeholder='Enter bShipping MobileNo' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label='bBilling Address' placeholder='Enter bBill Address' />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='bBilling City' placeholder='Enter bBilling City' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='bBilling Zip' placeholder='Enter bBilling Zip' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='bBilling EmailId' placeholder='Enter bBilling EmailId' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='bBilling MobileNo' placeholder='Enter bBilling MobileNo' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='bPayment Terms' placeholder='Enter bPayment Terms' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='bPacking Details' placeholder='Enter bPacking Details' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='bAdd Shipping Details' placeholder='Enter bAdd Shipping Details' />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='Article Code' placeholder='Enter Article Code' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='Name' placeholder='Enter Name' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='Category' placeholder='Enter Category' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='Sub-Category' placeholder='Enter Sub-Category' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='Department' placeholder='Enter Department' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='SKU' placeholder='Enter SKU' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='gst Code' placeholder='Enter gst Code' />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <TextField fullWidth label='Size' placeholder='Enter Size' />
              </FormControl>
            </Grid>
          </Grid>
        </CardContent>
        <Divider sx={{ margin: 0 }} />
        <CardActions>
          <Button size='large' type='submit' sx={{ mr: 2 }} variant='contained'>
            Submit
          </Button>
          <Button size='large' color='secondary' variant='outlined'>
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormLayoutsSeparator
