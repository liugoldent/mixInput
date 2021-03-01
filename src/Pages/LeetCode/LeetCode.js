import React from 'react'
import Topic from '../../Components/Topic'
import Ans from '../../Components/Ans'
import { TopicList } from './TopicAns/TopicList'
const LeetCode = ()=>{
  const showModal = true
  // const [showModal, setShowModal] = React.useState(false)
  const getClickInfo = function(info){
    // setShowModal(!showModal)
    console.log(showModal)
    console.log(info)
  }
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      {
        TopicList.map((eachTopicData, index) =>{
          return (
            <div key={eachTopicData[index][0]} className="mx-2">
              <Topic propsData={eachTopicData} index={index} propsFunc={getClickInfo}/>
            </div>
          )
        })
      }
      {
        showModal ?
          <>
            <Ans />
            <div className="opacity-25 bg-black fixed inset-0 z-40"></div>
          </>
          : null
      }
    </div>
  )
}

export default LeetCode
