import React from 'react'
import axios from 'axios'
import Topic from '../../Components/Topic'
import Ans from '../../Components/Ans'
import { TopicList } from './TopicList'
import { useSelector} from "react-redux";

const LeetCode = ()=>{
  const [showModal, setShowModal] = React.useState(false)
  /**
   * @description 得到點到的題目資訊
   * @param info {Array}
   */
  const getClickInfo = async function(info){
    await getAns()
    console.log(info)
    toggleModal(true)
  }
  /**
   * @description 取得leetcode解答
   * @returns {Promise<void>}
   */
  const getAns = async function(){
    await axios
      .get(`https://mixinput-nodeapi.herokuapp.com/leetcode`)
      .then(res =>{
        console.log(res)
      })

  }
  /**
   * @description 切換開關窗
   * @param status {Boolean}
   */
  const toggleModal = function(status){
    setShowModal(status)
  }

  const a = useSelector(state => state.todoList)
  console.log(a)
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
            <Ans controlModalFunc={toggleModal} />
            <div className="opacity-25 bg-black fixed inset-0 z-40"></div>
          </>
          : null
      }
    </div>
  )
}

export default LeetCode

// ref: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/modals/regular
