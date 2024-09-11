
import BarGraph from '@/components/BarGraph'
import ClientSection from '@/components/ClientSection'
import Footer from '@/components/Footer'
import MainSection from '@/components/MainSection'
import MeetingPage from '@/components/MeetingPage'
import TechnologyPieChart from '@/components/MostDemandTech'
import InDemandSkillsPage from '@/components/MostDemandTech'
import Navbar from '@/components/Navbar'
import OurClient from '@/components/OurClient'
import OurPartner from '@/components/OurPartner'
import PitchSection from '@/components/PitchSection'
import PricingSection from '@/components/PriceStructure'
import Schedular from '@/components/Schedular'
import Services from '@/components/Services'
import TalkToExpert from '@/components/TalkToExpert'
import TechnologiesSection from '@/components/TechnologyWeUse'
import TechRecruit from '@/components/TechRecruitment'
import TrendingSkills from '@/components/TrendingSkills'
import Video from '@/components/Video'
import VisualShowcase from '@/components/VisualShow'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      
      <PitchSection />
      <TalkToExpert />
      <TechnologiesSection />
      {/* <InDemandSkillsPage/> */}
      {/* <BarGraph /> */}
      {/* <TechnologyPieChart/> */}
      {/* <PricingSection/> */}
      {/* <OurPartner/>
       <ClientSection/>
       <OurClient/> */}
      
      {/* <Video /> */}
      
      <TrendingSkills/>
      <MeetingPage />

      <Footer />
    </div>
  )
}

export default page
