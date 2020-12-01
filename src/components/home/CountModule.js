import { Space } from 'antd'
import { useEffect, useRef, useState } from 'react'

function Main() {
  const [count, setCount] = useState(0)
    , timer = useRef()

  function startHandle() {
    if (!timer.current) {
      timer.current = setInterval(() => {
        setCount(c => c + 1)
      }, 1000)
    }
  }

  function pauseHandle() {
    if (timer.current) {
      clearInterval(timer.current)
      timer.current = null
    }
  }

  function resetHandle() {
    pauseHandle()
    setCount(0)
  }

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearInterval(timer.current)
        timer.current = null
      }
    }
  }, [])

  return <>
    <h3>hooks timer</h3>
    <div>
      <h3>计数：{count}</h3>
      <Space>
        <button onClick={startHandle}>启动</button>
        <button onClick={pauseHandle}>暂停</button>
        <button onClick={resetHandle}>重置</button>
      </Space>
    </div>
  </>
}

export default Main