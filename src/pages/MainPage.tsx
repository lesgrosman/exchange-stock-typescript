import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Container,TextField} from '@material-ui/core'
import { Pagination } from '@material-ui/lab'
import ExchangeItem from '../components/ExchangeItem'
import { Exchange } from '../interface/interfaces'
import { GET_EXCHANGES_FILTER } from '../queries/queries'

interface ExchangesVars {
  name: string,
  offset: number
}

interface ExchangeData {
  cryptoStockExchanges: CryptoStock
}

interface CryptoStock {
  cryptoStockExchanges: Exchange[]
  filter: {
    count: number
  }
}

const MainPage = () => {

  const [offset, setOffset] = useState<number>(1)
  const [input, setInput] = useState<string>('')
  const { data } =  useQuery<ExchangeData, ExchangesVars>(GET_EXCHANGES_FILTER, {
    variables: {
      name: input,
      offset: offset === 1 ? offset - 1 : offset - 5
    }
  })

  const changeFilter = (value: string): void => {
    setOffset(1)
    setInput(value)
  }

  const pagesCount = (count: number): number => {
    if (count % 5 === 0) {
      return count / 5
    }
    return Math.floor(count / 5) + 1
  }

  const count: number = data ? data.cryptoStockExchanges.filter.count : 0

  return (  
    <Container maxWidth="sm">
      <TextField 
        style={{marginBottom: '10px', width: "100%"}}
        onChange={(event) => changeFilter(event.target.value)}
        id="standard-basic" 
        label="Filter exchanges" 
      />
      {
        data &&
          data.cryptoStockExchanges.cryptoStockExchanges.map(item => {
            return <ExchangeItem exchange={item} key={item.exchange_id}/>
          })         
      } 
      <Pagination 
        style={{display: count ? "block": "none"}}
        size="large"
        onChange={(event, page) => setOffset(page * 5)}
        page={offset === 1 ? offset : (offset / 5)}
        count={pagesCount(count)} 
        color="primary" 
      />   
    </Container>
  )
}

export default MainPage