import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import DetailPage from './pages/DetailPage'
import MainPage from './pages/MainPage'
import Header from './components/Header'


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Header/>
          <Route path="/" exact component={MainPage}/>
          <Route path="/exchange/:id" component={DetailPage}/>
      </ApolloProvider>
    </Router>
  );
}

export default App;
