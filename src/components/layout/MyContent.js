import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../../screens/Home'
import Message from '../../screens/Message'
import ProjectManagementList from '../../screens/project-management/List'

import { Layout } from 'antd'
const { Content } = Layout


function Main() {
  return (
    <Content id='my-content'>
      <div className='my-body'>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/message' component={Message} />
          <Route exact path='/project-management/list' component={ProjectManagementList} />
          <Redirect exact from='/' to='home' />
          <Redirect to='/404' />
        </Switch>
      </div>
    </Content>
  )
}

export default Main