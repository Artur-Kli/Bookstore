import React, {Component} from 'react'
import { Container, Card } from "semantic-ui-react"
import { booksData } from '../data/booksData'

import '../app.css'

import BookCard from '../containers/BookCard'
import Filter from '../containers/Filter'
import Menu from '../containers/Menu'

class App extends Component {
  state = {
    books: booksData,
    isReady: true
  }
  
  render () {
    let {books, isReady} = this.state
    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          { !isReady ? 'Загрузка...' : books.map((book, i) => (<BookCard key={i} {...book} />)) }
        </Card.Group>
      </Container>
    )
  }
}

export default App