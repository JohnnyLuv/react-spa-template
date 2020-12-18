import { Link } from 'react-router-dom'

import CountModule from '../components/home/CountModule'

import { Divider } from 'antd'

function Main() {
  return <>
    <Divider orientation='left' plain children={'Router Link'} />
    <nav>
      <h3>home page</h3>
      <Link to="/signin">signin page</Link>
      <br />
      <Link to="/users">users page</Link>
    </nav>

    <Divider orientation='left' plain children={'CountModule'} />
    <CountModule />
  </>
}

export default Main