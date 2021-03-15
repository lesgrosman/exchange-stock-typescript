import { gql } from '@apollo/client'

export const GET_EXCHANGES_FILTER  = gql`
query getExchangesByFilter($name: String!, $offset: Int!){
  cryptoStockExchanges(filter: {filtrable: {name: $name},  limit: 5, offset: $offset})  {
    filter {
      count
    }
    cryptoStockExchanges {
      exchange_id
      website 
      name 
      data_start 
      data_end
      data_symbols_count
      volume_1hrs_usd
      volume_1day_usd
      volume_1mth_usd
    }
  }
}
`