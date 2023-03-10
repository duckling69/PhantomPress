import React from 'react'
import {BiUpvote,BiDownvote} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
  console.log(item)
  return (
    <Link to={`/news/${item.id}`}>
        <div
          className="bg-white w-[20vw] rounded-xl shadow"
          aria-label="card-overlay-v3"
        >
          <div className="w-full rounded-xl h-[250px] flex-shrink-0">
          <div className="w-full rounded-xl h-[250px] flex-shrink-0">
            <img
              src={item.image}
              alt=""
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
          </div>
          <div className="flex flex-col flex-1 p-5">
            <div className="pb-5 mb-5 border-b border-gray-200">
              <h3 className="mb-1 text-lg font-bold text-left">{item.title}</h3>
              <span className="text-sm ">{item.subtitle}</span>
            </div>
            <div className="flex items-center justify-between w-full ml-auto">
              <div className="text-sm text-slate-400">{item.date}</div>
              <div className="flex items-center gap-x-1">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg> */}
                <BiUpvote className="w-5 h-5 text-yellow-500"/>
                <span className="text-sm font-bold">52</span>
                <BiDownvote className="w-5 h-5 text-yellow-500"/>
                <span className="text-sm font-bold">12</span>
              </div>
            </div>
          </div>
        </div>
    </Link>  
  )
}

export default Card
