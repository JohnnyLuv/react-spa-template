import '../assets/style/layout.sass'

import MyHeader from '../components/layout/MyHeader'
import MyContent from '../components/layout/MyContent'

import { Layout } from 'antd'
const { Footer } = Layout


function Main() {

  return (
    <Layout>
      <MyHeader />
      <MyContent />
      <Footer id='my-footer'>2020 © MicMua TECH</Footer>
    </Layout>
  )
}

export default Main