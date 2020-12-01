import { useState, useEffect } from 'react'
import '../assets/style/signin.sass'
import { useHistory } from 'react-router-dom'

import Identify from '../components/sign-in/Identify'

import { Form, Input, Button, message } from 'antd'


function Main() {
  const history = useHistory()

  const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } }
    , tailLayout = { wrapperCol: { offset: 8, span: 16 } }

  const [identifyCode, setIdentifyCode] = useState('')
    , identifyCodeRange = '1234567890'
    , [contentWidth, setContentWidth] = useState(0) // 验证码canvas宽度

  // 点击验证码刷新验证码
  const changeCode = () => {
    setIdentifyCode('')
    makeCode(identifyCodeRange, 4)
  }
  // 生成一个随机整数  randomNum(0, 10) 0 到 10 的随机整数， 包含 0 和 10
  const randomNum = (min, max) => {
    max = max + 1
    return Math.floor(Math.random() * (max - min) + min)
  }
  // 随机生成验证码字符串
  const makeCode = (data, len) => {
    let _str = ''
    for (let i = 0; i < len; i++) {
      _str += data[randomNum(0, data.length - 1)]
    }
    setIdentifyCode(_str)
  }

  function onFinish(values) {
    makeCode(identifyCodeRange, 4)
    console.log('Success:', values)
    window.localStorage.setItem('username', values.username)
    history.push('/')
    message.success('登录成功')
  }

  useEffect(() => {
    makeCode(identifyCodeRange, 4)
    setContentWidth(document.getElementsByClassName('ant-form-item-control-input-content')[3].clientWidth)
    // eslint-disable-next-line
  }, [])

  return (
    <div id='signin-wrap'>
      <Form className='signin-form' {...layout} initialValues={{ username: 'johnny', password: '123456' }} onFinish={onFinish}>
        <h2 className='title'>MIC OA</h2>
        <Form.Item label='账号' name='username' rules={[{ required: true, message: '请输入账号!' }]}>
          <Input allowClear placeholder='请输入账号' />
        </Form.Item>
        <Form.Item label='密码' name='password' rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password allowClear placeholder='请输入密码' />
        </Form.Item>
        <Form.Item label='验证码' name='captcha' rules={[{ required: true, message: '请输入验证码!' }, { pattern: identifyCode, message: '验证码不正确' }]}>
          <Input allowClear maxLength={4} placeholder='请输入验证码' />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Identify identifyCode={identifyCode} contentWidth={contentWidth} onClick={changeCode} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type='primary' htmlType='submit' block>Sign in</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Main