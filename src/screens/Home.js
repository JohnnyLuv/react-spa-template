import { Link } from 'react-router-dom'

import CountModule from '../components/home/CountModule'


function Main() {
  return <>
    <nav>
      <h3>home page</h3>
      <Link to="/signin">signin page</Link>
      <br />
      <Link to="/users">users page</Link>
    </nav>
    <br />
    <br />
    <br />
    <br />
    <CountModule />
  </>
}

export default Main