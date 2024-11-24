import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

export const RelatedDoctors = ({speciality , docId}) => {
    const {doctors} = useContext(AppContext);
    const navigate = useNavigate();
    const [relDoc, setRelDocs] = useState([])

    useEffect(()=>{
        if(doctors.lenght >= 0 && speciality){
            const doctorsData = doctors.filter((prev) => prev.speciality === speciality && prev.id !== docId)
            setRelDocs(doctorsData)
        }
    },[relDoc,speciality,docId,doctors])
    
  return (
    <div className=' flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-auto'>
        <h1 className=' text-3xl font-medium'>Top Doctors to Book</h1>
        <p className=' sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {
                doctors.slice(0,5).map((item,index)=>(
                    <div onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className=' border border-blue-200 overflow-hidden rounded-xl cursor-pointer my-5 hover:translate-y-[-10px] duration-500 transition-all'>
                        <img className=' bg-blue-50' src={item.image} alt="" />
                        <div className=' p-4'>
                            <div className='flex items-center gap-2 text-center text-gray-50'>
                                <p className=' w-2 h-2 rounded-full bg-green-500'></p>
                                <p>Available</p>
                            </div>
                            <p className=' text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className=' text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))  
            }
        </div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className=' bg-blue-50 text-gray-600 py-3 px-6 rounded-lg mt-10'>More</button>
    </div>
  )
}

