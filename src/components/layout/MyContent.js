import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../../screens/Home'
import Message from '../../screens/Message'
import ProjectManagementList from '../../screens/project-management/List'

import { Layout, Breadcrumb } from 'antd'
const { Content } = Layout


function Main() {
  return (
    <Content id='my-content'>
      <Breadcrumb className='my-breadcrumb'>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
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