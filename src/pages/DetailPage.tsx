import React from 'react'
import { Container,Typography} from '@material-ui/core'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import { RouteComponentProps } from 'react-router-dom'

const useStyles = makeStyles({
  paper: {
    padding: '20px'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
  }
})

interface Props {
  location: RouteComponentProps;
}

const DetailPage: React.FC<Props> = ({location} : Props) => {
  const classes = useStyles()

  const { state }: any = location
  const {
    data_end,
    data_symbols_count,
    volume_1hrs_usd,
    volume_1day_usd,
    volume_1mth_usd,
    data_start,
    exchange_id,
    name,
    website
  } = state.exchange

  const rows = [
    {name: 'Exchange ID:', info:  exchange_id},
    {name: 'Website', info:  website},
    {name: 'Starting:', info:  data_start},
    {name: 'Ending:', info:  data_end},
    {name: 'Symbols Count:', info:  data_symbols_count},
    {name: '1st Hour USD:', info:  volume_1hrs_usd},
    {name: '1st Day USD:', info:  volume_1day_usd},
    {name: '1st Month USD:', info:  volume_1mth_usd}
  ]

return (
  <Container maxWidth="sm">
    <Paper className={classes.paper} elevation={3}>
    <Typography align="center" variant="h3">{name}</Typography>
      {rows.map(row => {
        return (
          <div key={row.name} className={classes.row}>
            <Typography variant="h6">{row.name}</Typography>
            {
              row.name === 'Website'
              ? <Link target="_blank" href={website} variant="body2">
                  {website}
                </Link>
              : <Typography variant="h6">{row.info}</Typography>
            }
          </div>
        )
      })}
    </Paper>
  </Container>
)
}

export default DetailPage