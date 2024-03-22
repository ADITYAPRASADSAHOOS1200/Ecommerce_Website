import React, { useEffect, useState } from 'react'
import { nextslide,prevslide,dotslide } from '../Store/Slices/Slider'
import { useDispatch, useSelector } from 'react-redux'
import { Sliderdata } from '../asset/Sliderdata'
import { GiPlayButton } from "react-icons/gi";


const Slider = () => {

  const[autoSlide,setAutoSlide]=useState(true)


const dispatch=useDispatch()

const SlideNext=useSelector(state => state.sliders.value )




useEffect(()=>{

if(autoSlide){
  const interval=setInterval(() => {
     dispatch(nextslide(SlideNext + 1))
  }, 2000);
 
  return ()=>{
    
    clearInterval(interval)
  }
}
  
},[autoSlide,SlideNext,dispatch])


function handleMouse(){

  setAutoSlide(false)

}


function handleLeave(){

 setAutoSlide(true)

}



  return (
    <div className='relative pb-4 '  >
      <div   onMouseEnter={handleMouse} onMouseLeave={handleLeave}>
        {
            Sliderdata.map((item,index)=>{
        return (<div key={item.id} className={item.id === SlideNext ? "opacity-100  duration-700 ease-in-out scale-100":"opacity-0 duration-700 ease-in-out scale-96"} > 
              <div>{
                  item.id === SlideNext &&
                <img src={item.img} alt="Shoes" className='h-[700px] w-full'/>
                }
               </div>
               <div>
               <p className=' font-semibold text-xl absolute mx-auto top-20 text-white'>{item.text}</p>
               </div>
            </div> 
            )})
        }
      </div>
       <div className='flex absolute bottom-[100px] left-[45%]'>
        {
          Sliderdata.map((dot,index)=>{
          return(
            <div className='mr-4' key={index}>
              <div className={
               index === SlideNext ? "bg-green-300 rounded-full p-4 cursor-pointer":
                 "bg-white rounded-full p-4 cursor-pointer" }
                 onClick={()=>dispatch(dotslide(index))}
                 >
              </div>
            </div>)})
        }
   

       </div>

      <button  className='absolute top-[250px] left-[0.5%] text-white'
      
      onClick={()=>dispatch(nextslide(SlideNext + 1))}><GiPlayButton /></button>
      <button  className='absolute top-[250px] left-[97%] text-white rotate-180 '  onClick={()=>dispatch(prevslide(SlideNext - 1))}><GiPlayButton /></button>
    </div>
  )
}

export default Slider
