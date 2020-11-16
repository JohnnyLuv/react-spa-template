import '../assets/style/signin.sass'
import { useHistory } from 'react-router-dom'

import { Form, Input, Button, message } from 'antd'


function Main() {
  const history = useHistory()

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  }

  function onFinish(values) {
    console.log('Success:', values)
    window.localStorage.setItem('username', values.username)
    history.push('/')
    message.success('登录成功')
  }

  return (
    <div id='signin-wrap'>
      <Form className='signin-form' {...layout} initialValues={{ username: 'johnny', password: '123456' }} onFinish={onFinish}>
        <h2 className='title'>MIC OA</h2>
        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input allowClear />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password allowClear />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit" block>Sign in</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Main