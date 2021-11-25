import { useState } from 'react'
import { GlobalStyle } from './styles/global'
import { Container } from './styles/Home'

import { SearchBar } from './components/SearchBar'
import { User } from './components/User'

function App() {
  const [user, setUser] = useState()

  return (
    <Container>
      <SearchBar setUser={setUser} />
      {user.id && <User user={user} />}
      <GlobalStyle />
    </Container>
  )
}

export default App
