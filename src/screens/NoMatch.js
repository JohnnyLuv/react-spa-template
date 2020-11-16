import { Link } from 'react-router-dom'


function Main() {
  return (
    <div style={{ marginTop: '10vh', textAlign: 'center' }}>
      <h3>404 NotFound, go <Link to='/'>home page</Link></h3>
    </div>
  )
}

export default Main