import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Exchange } from '../interface/interfaces'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: '15px'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

interface PropType {
  exchange: Exchange
}

const ExchangeItem: React.FC<PropType> = ({ exchange }) => {
  const history = useHistory()
  const classes = useStyles();
  const { name, website, exchange_id } = exchange

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div>
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          <Link target="_blank" href={website} variant="body2">
            {website}
          </Link>
        </div>
        <CardActions>
        <Button 
          onClick={() => history.push({
          pathname: `/exchange/${exchange_id}`,
          state: {exchange: exchange}
          })}
          size="small"
        >
          Exchange Detail
        </Button>
      </CardActions>
      </CardContent>
    </Card>
  )
}

export default ExchangeItem