import React from 'react'

const Post = ()=>{
  return (
    <div>
    <div className="w-full lg:w-1/2 p-3">
      <div className="
      flex
      flex-col
      lg:flex-row
      rounded
      overflow-hidden
      h-auto
      lg:h-32
      border
      shadow
      shadow-lg">
        <img className="block h-auto w-full lg:w-48 flex-none bg-cover h-24"
             src="https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
          <div
            className="bg-white
            rounded-b
            lg:rounded-b-none
            lg:rounded-r
            p-4
            flex
            flex-col
            justify-between
            leading-normal">
            <div className="text-black font-bold text-xl mb-2 leading-tight">Can coffee make you a bitter developer?
            </div>
            <p className="text-grey-darker text-base">Read more</p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Post
