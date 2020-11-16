import { Link } from 'react-router-dom'


function Main() {
  return (
    <nav>
      <h3>home page</h3>
      <Link to="/signin">signin page</Link>
      <br />
      <Link to="/users">users page</Link>
    </nav>
  )
}

export default Main