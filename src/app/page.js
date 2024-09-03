
import ClientSection from '@/components/ClientSection'
import MainSection from '@/components/MainSection'
import Navbar from '@/components/Navbar'
import OurClient from '@/components/OurClient'
import OurPartner from '@/components/OurPartner'
import Services from '@/components/Services'
import TechRecruit from '@/components/TechRecruitment'
import React from 'react'
 
 const page = () => {
   return (
     <div>
       <Navbar/>
       <MainSection/>
       <TechRecruit/>
       <Services/>
       <OurPartner/>
       <ClientSection/>
       <OurClient/>
      
     </div>
   )
 }
 
 export default page
 