/**
 * @description 得到一個random的顏色
 * @returns {string}
 */
export const randomColor = (type)=>{
  const allColor = [
    'gray', 'red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'
  ]
  const randomNumber = (Math.floor(Math.random()*4))+5
  const randomColor = Math.floor(Math.random()*allColor.length)
  return `${type}-${allColor[randomColor]}-${randomNumber}00`
}
