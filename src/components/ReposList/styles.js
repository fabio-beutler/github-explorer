import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  background: var(--shape);
  border-radius: 10px;
  border-bottom: 10px solid var(--blue);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    position: relative;

    button {
      position: absolute;
      left: 1rem;
      display: flex;
      align-items: center;
      color: var(--text-secondary);
      background: var(--shape-light);
      padding: 0.3rem 0.5rem;
      border-radius: 8px;
      transition: filter 0.3s ease;

      &:hover {
        filter: brightness(80%);
      }
    }

    h1 {
      font-size: 1.5rem;
      color: var(--text);
    }
  }

  ul {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`
