import { Link } from 'react-router-dom'


function Main() {
  return (
    <nav>
      <Link to='/'>home page</Link>
      <br />
      <Link to='/users'>users page</Link>
    </nav>
  )
}

export default Main