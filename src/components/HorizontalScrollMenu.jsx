import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import React from 'react'
import { sampleDataNews } from '../constants'
import {AiOutlineLeftCircle} from 'react-icons/ai'
import {AiOutlineRightCircle} from 'react-icons/ai'

const HorizontalScrollMenu = () => {
  return (
    <div>
        <ScrollMenu className='h-[100%]' LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {sampleDataNews.map(({ item }) => (
        <div className='h-[30vh] aspect-video mx-20 rounded-xl bg-gray-300 flex flex-col justify-around '>
            <div className='bg-black p-1'>
                <img src="https://www.siasat.com/wp-content/uploads/2022/12/Jal.jpg" className='w-[65%]' alt="" />
            </div>
            <div>
                Headline
            </div>
           <div className='flex justify-around gap-10'>
           <button className='rounded-xl py-2 px-4 bg-blue-500 text-white  -mb-5 hover:bg-blue-700 ease-in-out duration-150 w-fit '>
              View
            </button>
            <button className='rounded-xl py-2 px-4 border-blue-500 border-2 text-blue-500 -mb-5 hover:text-white hover:bg-blue-700 ease-in-out duration-150 w-fit '>
              Approve
            </button>
           </div>
        </div>
      ))}
    </ScrollMenu>
    </div>
  )
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <AiOutlineLeftCircle disabled={isFirstItemVisible} className='text-3xl' onClick={() => scrollPrev()}>
      </AiOutlineLeftCircle>
    );
  }
  
  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <AiOutlineRightCircle disabled={isLastItemVisible} className='text-3xl' onClick={() => scrollNext()}>
        Right
      </AiOutlineRightCircle>
    );
  }



export default HorizontalScrollMenu