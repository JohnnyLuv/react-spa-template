import '../assets/style/layout.sass'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Home from './Home'
import Message from './Message'
import SignIn from './SignIn'

import { Layout, Menu, Breadcrumb, Badge, Avatar, Button, Dropdown } from 'antd'
import {
  DatabaseOutlined, DeploymentUnitOutlined, TeamOutlined, BuildOutlined,
  MessageOutlined, SettingOutlined, LogoutOutlined,
} from '@ant-design/icons'
const { Header, Content, Footer } = Layout
const { SubMenu } = Menu


function Main() {
  return (
    <Layout>
      <Header id='my-header' mode='horizontal'>
        <div className="logo" >MIC OA</div>
        <Menu className='sider-menu' mode="horizontal" defaultSelectedKeys={['11']}>
          <SubMenu key="1" icon={<DatabaseOutlined />} title='项目管理'>
            <Menu.Item key="11">Option 1</Menu.Item>
            <Menu.Item key="12">Option 2</Menu.Item>
          </SubMenu>
          <SubMenu key="2" icon={<DeploymentUnitOutlined />} title='内部管理'>
            <Menu.Item key="21">Option 1</Menu.Item>
            <Menu.Item key="22">Option 2</Menu.Item>
          </SubMenu>
          <SubMenu key="3" icon={<TeamOutlined />} title='人员管理'>
            <Menu.Item key="31">Option 1</Menu.Item>
            <Menu.Item key="32">Option 2</Menu.Item>
          </SubMenu>
          <SubMenu key="4" icon={<BuildOutlined />} title='模板'>
            <Menu.Item key="41">Option 1</Menu.Item>
            <Menu.Item key="42">Option 2</Menu.Item>
          </SubMenu>
        </Menu>
        <Dropdown overlay={<Menu>
          <Menu.Item icon={<MessageOutlined />}>消息</Menu.Item>
          <Menu.Item icon={<SettingOutlined />}>设置</Menu.Item>
          <Menu.Item icon={<LogoutOutlined />}>登出</Menu.Item>
        </Menu>}>
          <div>
            <Badge count={7}>
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', }}>J</Avatar>
            </Badge>
            <Button type='link' size='small'>Johnny</Button>
          </div>
        </Dropdown>
      </Header>
      <Content id='my-content'>
        <Breadcrumb className='my-breadcrumb'>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className='my-body'>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/message' component={Message} />
            <Redirect exact from='/' to='home' />
            <Redirect to='/404' />
          </Switch>
        </div>
      </Content>
      <Footer id='my-footer'>2020 © MicMua TECH</Footer>
    </Layout>
  )
}

export default Main