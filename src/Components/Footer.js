import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
const Footer = ()=>{
  const iconArray = [
    {type: faGithub, link:''},
    {type: faInstagram, link:''},
    {type: faPaperPlane, link:''},
  ]
  return (
    <div className="flex
    justify-center
    items-center
    h-40
    bg-black
    text-white
    w-auto">
      {iconArray.map((eachData, index)=>{
        return (
          <div className="border-2 border-light-blue-500 w-20 h-20 m-3 order-1 flex justify-center
        items-center rounded-lg hover:bg-gray-900 cursor-pointer"
          key={index}>
            <FontAwesomeIcon icon={eachData.type} size="lg"/>
          </div>
        )
      })}
    </div>
  )
}

export default Footer
