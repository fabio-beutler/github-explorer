import { Container } from './styles'

export function User() {
  return (
    <Container>
      <img src='https://github.com/fabio-beutler.png' alt='Fabio Beutler' />
      <h1>Fabio Beutler</h1>
      <h2>fabio-beutler</h2>
      <p>Bio do usuário</p>
      <section>
        <div>
          <strong>12</strong>
          <span>Repositórios</span>
        </div>

        <div>
          <strong>21</strong>
          <span>Seguidores</span>
        </div>

        <div>
          <strong>21</strong>
          <span>Seguindo</span>
        </div>
      </section>
    </Container>
  )
}
