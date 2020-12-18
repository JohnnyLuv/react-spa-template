import { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { Layout, Menu, Badge, Avatar, Button, Dropdown } from 'antd'
import {
  HomeOutlined, DatabaseOutlined, DeploymentUnitOutlined, TeamOutlined, BuildOutlined,
  MessageOutlined, SettingOutlined, LogoutOutlined,
} from '@ant-design/icons'
const { Header } = Layout
const { SubMenu } = Menu


/**
 * 组件 layout header
 */
function Main() {
  const history = useHistory()

  const [selectedKeys, setSelectedKeys] = useState([])

  const menuList = [
    { title: '首页', path: '/home', icon: <HomeOutlined />, },
    {
      title: '项目管理',
      icon: <DatabaseOutlined />,
      children: [
        { title: '项目列表', path: '/project-management/list', }
      ]
    },
    {
      title: '内部管理',
      icon: <DeploymentUnitOutlined />,
      children: [
        { title: '内部表1', path: '/inner-management/menu1', },
        { title: '内部表2', path: '/inner-management/menu2', }
      ]
    },
    {
      title: '人员管理',
      icon: <TeamOutlined />,
      children: [
        { title: '人员表1', path: '/personnel-management/menu1', },
        { title: '人员表2', path: '/personnel-management/menu2', }
      ]
    },
    { title: '模板', path: '/template-management', icon: <BuildOutlined />, },
  ]

  function signOut() {
    window.localStorage.clear()
    history.push('/signin')
  }

  function onMenuChanged(menuItemInfo) {
    // console.log(menuItemInfo)
    const { title, path } = menuItemInfo
    history.push({
      pathname: path,
      state: { title, path, },
    })
    setSelectedKeys([title])
  }

  useEffect(() => {
    // console.log(history.location)
    setSelectedKeys([history.location.state?.title || '首页'])
    // eslint-disable-next-line
  }, [history.location.pathname])

  return (
    <Header id='my-header' mode='horizontal'>
      <Link className='logo' to='/'>MIC OA</Link>
      <Menu className='sider-menu' mode='horizontal' selectedKeys={selectedKeys}>
        {menuList.map(menu => menu.children
          ? <SubMenu key={menu.title} icon={menu.icon} title={menu.title}>
            {menu.children.map(child => <Menu.Item key={child.title} children={child.title} onClick={() => onMenuChanged(child)} />)}
          </SubMenu>
          : <Menu.Item key={menu.title} icon={menu.icon} children={menu.title} onClick={() => onMenuChanged(menu)} />
        )}
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
    </Header >
  )
}

export default Main