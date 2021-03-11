import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from "./LeetCodeReducer";
import LeetCode from "./LeetCode";

// 創造一個store出來
const LeetCodeStore = createStore(reducer)

const LeetCodeMain = ()=>{
  return(
    <Provider store={LeetCodeStore}>
      <LeetCode />
    </Provider>
    )
}

export default LeetCodeMain


