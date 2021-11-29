import { useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import { toast, ToastContainer } from 'react-toastify'
import { api } from '../../services/api'
import { Container } from './styles'

export function SearchBar({ setUser, setUserRepos }) {
  const inputRef = useRef()

  function getUserData(event) {
    event.preventDefault()

    api
      .get(`/${inputRef.current.value}`)
      .then(response => {
        setUser(response.data)

        api
          .get(`/${inputRef.current.value}/repos`)
          .then(response => setUserRepos(response.data))
      })
      .catch(e => {
        setUser(null)
        setUserRepos(null)

        console.log(e.response)

        toast.error('Usuário não encontrado', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'dark'
        })
      })
  }

  return (
    <>
      <Container>
        <h1>Github Explorer</h1>

        <form onSubmit={getUserData}>
          <div>
            <span>github.com/</span>
            <input type='text' ref={inputRef} />
          </div>

          <button type='submit'>
            <FiSearch />
          </button>
        </form>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </Container>
    </>
  )
}
