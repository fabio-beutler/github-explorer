import { GlobalStyle } from './styles/global'
import { Container } from './styles/Home'

import { SearchBar } from './components/SearchBar'
import { User } from './components/User'

function App() {
  return (
    <Container>
      <SearchBar />
      <User />
      <GlobalStyle />
    </Container>
  )
}

export default App
