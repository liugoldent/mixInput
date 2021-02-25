import React from 'react'
import Topic from '../../Components/Topic'
import { TopicList } from './TopicAns/TopicList'
const LeetCode = ()=>{
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      {
        TopicList.map((eachTopicData, index) =>{
          return (
            <div key={eachTopicData[index][0]}>
              <Topic propsData={eachTopicData} index={index} />
            </div>
          )
        })
      }
    </div>
  )
}

export default LeetCode
