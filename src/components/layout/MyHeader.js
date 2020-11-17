import { useHistory } from 'react-router-dom'

import { Layout, Menu, Badge, Avatar, Button, Dropdown } from 'antd'
import {
  DatabaseOutlined, DeploymentUnitOutlined, TeamOutlined, BuildOutlined,
  MessageOutlined, SettingOutlined, LogoutOutlined,
} from '@ant-design/icons'
const { Header } = Layout
const { SubMenu } = Menu


function Main() {
  const history = useHistory()

  function signOut() {
    window.localStorage.clear()
    history.push('/signin')
  }

  return (
    <Header id='my-header' mode='horizontal'>
      <div className="logo" >MIC OA</div>
      <Menu className='sider-menu' mode="horizontal" defaultSelectedKeys={['11']}>
        <SubMenu key="1" icon={<DatabaseOutlined />} title='项目管理'>
          <Menu.Item key="11">项目列表</Menu.Item>
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
        <Menu.Item icon={<LogoutOutlined />} onClick={signOut}>登出</Menu.Item>
      </Menu>}>
        <div>
          <Badge count={7}>
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', }}>{window.localStorage.getItem('username')?.slice(0, 1).toUpperCase()}</Avatar>
          </Badge>
          <Button type='link' size='small'>{window.localStorage.getItem('username')}</Button>
        </div>
      </Dropdown>
    </Header>
  )
}

export default Main