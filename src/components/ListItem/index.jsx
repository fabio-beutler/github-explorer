import { Li } from './styles'

export function ListItem({ repo }) {
  return (
    <Li>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <a target='_blank' rel='noreferrer' href={repo.html_url}>
        Acessar repositório
      </a>
    </Li>
  )
}
