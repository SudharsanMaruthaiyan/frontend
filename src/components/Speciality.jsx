import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
    
  return (
    <div className=' flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        <h1 className=' text-3xl font-medium'>Find by Speciality</h1>
        <p className=' sm:w-1/2 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        {/* <Title/> */}
        <div className=' flex overflow-scroll sm:justify-center gap-4 pt-5 w-full'>
            {
                specialityData.map((items,index)=>{
                    return(
                        <Link className=' flex flex-col items-center cursor-pointer text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to={`/doctors/${items.speciality}`} key={index}>
                            <img className=' w-16 sm:w-24 mb-2' src={items.image} alt="" />
                            <p>{items.speciality}</p>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Speciality