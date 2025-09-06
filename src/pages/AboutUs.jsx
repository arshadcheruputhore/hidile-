import React from 'react'
import VissionMission_aboutUs from '../components/VissionMission_aboutUs'
import CoreValues_AboutUs from '../components/CoreValues_AboutUs'
import JourneyTimeline_AboutUs from '../components/JourneyTimeline_AboutUs'
import MeetOurTeam_AboutUs from '../components/MeetOurTeam_AboutUs'
import LocationMap_AboutUs from '../components/LocationMap_AboutUs'

function AboutUs() {
  return (
    <>
      <div className="">
        <VissionMission_aboutUs />

        <CoreValues_AboutUs />

        <JourneyTimeline_AboutUs />

        {/* <MeetOurTeam_AboutUs /> */}

        <LocationMap_AboutUs />
      </div>
    </>
  )
}

export default AboutUs