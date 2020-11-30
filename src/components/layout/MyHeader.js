import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

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

  const menuList = [
    {
      title: '首页',
      path: '/',
      icon: <HomeOutlined />,
      children: []
    },
    {
      title: '项目管理',
      path: '/project-management',
      icon: <DatabaseOutlined />,
      children: [
        {
          title: '项目列表',
          path: '/project-management/list',
          icon: '',
          children: []
        }
      ]
    },
    {
      title: '内部管理',
      path: '',
      icon: <DeploymentUnitOutlined />,
      children: [
        {
          title: 'menu1',
          path: '/inner-management/menu1',
          icon: '',
          children: []
        },
        {
          title: 'menu2',
          path: '/inner-management/menu2',
          icon: '',
          children: []
        }
      ]
    },
    {
      title: '人员管理',
      path: '',
      icon: <TeamOutlined />,
      children: [
        {
          title: 'menu1',
          path: '/personnel-management/menu1',
          icon: '',
          children: []
        },
        {
          title: 'menu2',
          path: '/personnel-management/menu2',
          icon: '',
          children: []
        }
      ]
    },
    {
      title: '模板',
      path: '/template-management',
      icon: <BuildOutlined />,
    },
  ]

  function signOut() {
    window.localStorage.clear()
    history.push('/signin')
  }

  function onMenuChanged({ item }) {
    const _title = item.props.children[1]
    const _path = item.props.eventKey
    console.log(_title, _path)
    history.push({
      pathname: _path,
      state: {
        title: _title,
        path: _path,
      },
    })
  }

  return (
    <Header id='my-header' mode='horizontal'>
      <Link className='logo' to='/'>MIC OA</Link>
      <Menu className='sider-menu' mode='horizontal' onSelect={onMenuChanged}>
        {menuList.map(menu => menu.children?.length > 0
          ? <SubMenu key={menu.path} icon={menu.icon} title={menu.title}>
            {menu.children.map(child => <Menu.Item key={child.path}>{child.title}</Menu.Item>)}
          </SubMenu>
          : <Menu.Item key={menu.path}>{menu.title}</Menu.Item>
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