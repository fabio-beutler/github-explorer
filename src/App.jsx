import { GlobalStyle } from './styles/global'
import { SearchBar } from './components/SearchBar'
import { Container } from './styles/Home'

function App() {
  return (
    <Container>
      <SearchBar />
      <GlobalStyle />
    </Container>
  )
}

export default App
