import React from 'react'
import {Link} from "react-router-dom";

const Dropdown = ({ toggle,isOpen }) =>{
  console.log(isOpen)
  return (
    <div
      className={
      isOpen ?
      'grid grid-rows-4 text-center item-center bg-yellow-500'
      : 'hidden'
      }
      onClick={toggle}
    >
      <Link className="p-4" to="/">Home</Link>
      <Link className="p-4" to="/leetcode">LeetCode</Link>
      <Link className="p-4" to="/about">About</Link>
      <Link className="p-4" to="/content">Content</Link>
    </div>
  )
}

export default Dropdown
