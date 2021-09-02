import MeetupList from '../components/meetups/MeetupList'

import { useContext } from 'react'
import { MeetupContext } from '../store/contextData'


function AllMeetups() {

  const context_data = useContext(MeetupContext);

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={context_data.meetups} />
        </section>
    )
}

export default AllMeetups
