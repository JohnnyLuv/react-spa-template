import { useEffect } from 'react'

function Main({
  identifyCode = '1234', // 默认注册码
  fontSizeMin = 25, // 字体最小值
  fontSizeMax = 35, // 字体最大值
  backgroundColorMin = 200, // 验证码图片背景色最小值
  backgroundColorMax = 220, // 验证码图片背景色最大值
  dotColorMin = 60, // 背景干扰点最小值
  dotColorMax = 120, // 背景干扰点最大值
  contentWidth = 116, // 容器宽度
  contentHeight = 38, // 容器高度
  onClick,
}) {

  /**
   * 生成一个随机数
   * @param {*} min 
   * @param {*} max 
   */
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  /**
   * 生成一个随机的颜色
   * @param {*} min 
   * @param {*} max 
   */
  function randomColor(min, max) {
    let r = randomNum(min, max)
    let g = randomNum(min, max)
    let b = randomNum(min, max)
    return `rgb(${r},${g},${b})`
  }

  /**
   * 绘制画布
   */
  function drawPic() {
    let canvas = document.getElementById("s-canvas")
    let ctx = canvas.getContext("2d")
    ctx.textBaseline = "bottom"
    // 绘制背景
    ctx.fillStyle = randomColor(backgroundColorMin, backgroundColorMax)
    ctx.fillRect(0, 0, contentWidth, contentHeight)
    // 绘制文字
    for (let i = 0; i < identifyCode.length; i++) {
      drawText(ctx, identifyCode[i], i)
    }
    drawLine(ctx)
    drawDot(ctx)
  }

  /**
   * 生成字符
   * @param {*} ctx 
   * @param {*} txt 
   * @param {*} i 
   */
  function drawText(ctx, txt, i) {
    ctx.fillStyle = randomColor(50, 160) // 随机生成字体颜色
    ctx.font = randomNum(fontSizeMin, fontSizeMax) + "px SimHei" // 随机生成字体大小
    let x = (i + 1) * (contentWidth / (identifyCode.length + 1))
    let y = randomNum(fontSizeMax, contentHeight - 5)
    const deg = randomNum(-30, 30)
    // 修改坐标原点和旋转角度
    ctx.translate(x, y)
    ctx.rotate((deg * Math.PI) / 180)
    ctx.fillText(txt, 0, 0)
    // 恢复坐标原点和旋转角度
    ctx.rotate((-deg * Math.PI) / 180)
    ctx.translate(-x, -y)
  }

  /**
   * 绘制干扰线
   * @param {*} ctx 
   */
  function drawLine(ctx) {
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = randomColor(100, 200)
      ctx.beginPath()
      ctx.moveTo(
        randomNum(0, contentWidth),
        randomNum(0, contentHeight)
      )
      ctx.lineTo(
        randomNum(0, contentWidth),
        randomNum(0, contentHeight)
      )
      ctx.stroke()
    }
  }

  /**
   * 绘制干扰点
   * @param {*} ctx 
   */
  function drawDot(ctx) {
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = randomColor(0, 255)
      ctx.beginPath()
      ctx.arc(
        randomNum(0, contentWidth),
        randomNum(0, contentHeight),
        1,
        0,
        2 * Math.PI
      )
      ctx.fill()
    }
  }

  useEffect(() => {
    drawPic()
    // eslint-disable-next-line
  }, [identifyCode])

  return (
    <canvas id='s-canvas' width={contentWidth} height={contentHeight} onClick={onClick} />
  )
}

export default Main