'use client'
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react'

const TrendingSkills = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    return (
        <div className='p-2' data-aos="zoom-in-up">
            <p className='text-center text-4xl font-bold '>
                Our Strength in Top Trending Skills 
            </p>
            <div className='flex justify-center'>
                <img 
                    src='Trending_Skills.png' 
                    alt='Trending Skills Infographic'
                    className='object-contain max-w-full max-h-[500px]'
                />
            </div>
        </div>
    )
}

export default TrendingSkills
