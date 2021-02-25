import React from 'react'
import { randomColor } from '../Components/common'
/**
 * @description 每個題目的組件
 * @param propsData - type: Array [題目, 題號名稱, 哪種形態的題目(tag)]
 * @param index - type: number
 */
const Topic = ({propsData, index})=>{
  return (
    <div className="font-mono flex justify-center items-center flex-col mt-2 mb-2">
      <div className="relative inline-block">
        <img className="rounded-lg" src={`https://picsum.photos/300/300?random=${index}`} />
        <h1 className="
        absolute
        -inset-0
        m-auto
        text-yellow-500
        text-5xl
        text-center
        h-12
        leading-12
        text-5xl
        bg-black
        bg-opacity-30
        ">{propsData[0]}</h1>
      </div>
      <p className="mt-2">{propsData[1]}</p>
      <p className={randomColor('text')}>Tag: {propsData[2]}</p>
    </div>
  )
}

export default Topic
