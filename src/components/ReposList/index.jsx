import { FiArrowLeft } from 'react-icons/fi'
import { Container } from './styles'
import { ListItem } from '../ListItem'

export function ReposList({ user, userRepos, setIsReposListActive }) {
  return (
    <Container>
      <div>
        <button type='button' onClick={() => setIsReposListActive(false)}>
          <FiArrowLeft />
          Voltar
        </button>
        {user && <h1>Repositórios de {user.name}</h1>}
      </div>

      <ul>
        {userRepos.map(repo => (
          <ListItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </Container>
  )
}
