// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'

import Button from '@mui/material/Button'

import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import MuiDivider from '@mui/material/Divider'

import ReactApexcharts from 'src/@core/components/react-apexcharts'

// const depositData = [
//   {
//     logoWidth: 28,
//     logoHeight: 29,
//     amount: '+$4,650',
//     subtitle: 'Sell UI Kit',
//     title: 'Gumroad Account',
//     logo: '/images/logos/gumroad.png'
//   },
//   {
//     logoWidth: 38,
//     logoHeight: 38,
//     amount: '+$92,705',
//     title: 'Mastercard',
//     subtitle: 'Wallet deposit',
//     logo: '/images/logos/mastercard-label.png'
//   },
//   {
//     logoWidth: 20,
//     logoHeight: 28,
//     amount: '+$957',
//     title: 'Stripe Account',
//     subtitle: 'iOS Application',
//     logo: '/images/logos/stripe.png'
//   },
//   {
//     logoWidth: 34,
//     logoHeight: 32,
//     amount: '+$6,837',
//     title: 'American Bank',
//     subtitle: 'Bank Transfer',
//     logo: '/images/logos/american-bank.png'
//   },
//   {
//     logoWidth: 33,
//     logoHeight: 22,
//     amount: '+$446',
//     title: 'Bank Account',
//     subtitle: 'Wallet deposit',
//     logo: '/images/logos/citi-bank.png'
//   }
// ]

// const withdrawData = [
//   {
//     logoWidth: 29,
//     logoHeight: 30,
//     amount: '-$145',
//     title: 'Google Adsense',
//     subtitle: 'Paypal deposit',
//     logo: '/images/logos/google.png'
//   },
//   {
//     logoWidth: 34,
//     logoHeight: 34,
//     amount: '-$1870',
//     title: 'Github Enterprise',
//     logo: '/images/logos/github.png',
//     subtitle: 'Security & compliance'
//   },
//   {
//     logoWidth: 30,
//     logoHeight: 30,
//     amount: '-$450',
//     title: 'Upgrade Slack Plan',
//     subtitle: 'Debit card deposit',
//     logo: '/images/logos/slack.png'
//   },
//   {
//     logoWidth: 30,
//     logoHeight: 30,
//     amount: '-$540',
//     title: 'Digital Ocean',
//     subtitle: 'Cloud Hosting',
//     logo: '/images/logos/digital-ocean.png'
//   },
//   {
//     logoWidth: 36,
//     logoHeight: 21,
//     amount: '-$21',
//     title: 'AWS Account',
//     logo: '/images/logos/aws.png',
//     subtitle: 'Choosing a Cloud Platform'
//   }
// ]

// Styled Divider component
const Divider = styled(MuiDivider)(({ theme }) => ({
  margin: theme.spacing(5, 0),
  borderRight: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down('md')]: {
    borderRight: 'none',
    margin: theme.spacing(0, 5),
    borderBottom: `1px solid ${theme.palette.divider}`
  }
}))

const DepositWithdraw = () => {
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '40%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5
      }
    },
    dataLabels: { enabled: false },
    colors: [
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.primary.main,
      theme.palette.background.default,
      theme.palette.background.default
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      tickPlacement: 'on',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
      }
    }
  }

  const seriesline = [
    {
      name: 'Guests',
      data: [19, 22, 20, 26]
    }
  ]

  const optionsline = {
    colors: [theme.palette.primary.main],

    xaxis: {
      categories: ['2019-05-01', '2019-05-02', '2019-05-03', '2019-05-04']
    }
  }

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Deposit'
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography variant='caption'>View All</Typography>}
          titleTypographyProps={{
            variant: 'h6',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          <ReactApexcharts
            type='bar'
            height={205}
            options={options}
            series={[{ data: [37, 57, 45, 75, 57, 40, 65] }]}
          />
          <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
            <Typography variant='h5' sx={{ mr: 4 }}>
              45%
            </Typography>
            <Typography variant='body2'>Your sales performance is 45% better compared to last month</Typography>
          </Box>
          <Button fullWidth variant='contained'>
            Details
          </Button>
        </CardContent>
      </Box>

      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Withdraw'
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography variant='caption'>View All</Typography>}
          titleTypographyProps={{
            variant: 'h6',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          <ReactApexcharts type='line' height={300} options={optionsline} series={seriesline} />
        </CardContent>
      </Box>
    </Card>
  )
}

export default DepositWithdraw
