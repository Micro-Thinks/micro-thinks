"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'; 

const WhatsAppButton = () => {
    const [visible  , setVisible] = useState(false)
    
    useEffect(()=> {
        const togglevisibility = () => {
            if(window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
            }
        window.addEventListener('scroll' , togglevisibility)
        return () => window.removeEventListener('scroll' , togglevisibility)
    },[])
  return (
    <div className={` fixed bottom-10 right-10  ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0' } duration-300 ease-in-out `}> 
        {visible &&
        (

            <Link href='https://wa.me/+923316163916' target='_blank' > 
        <FaWhatsapp className=" h-16 w-16 "  color='#25D366'   height={100} width={100} />
       </Link> 
        )
        }
         </div>
  )
}

export default WhatsAppButton