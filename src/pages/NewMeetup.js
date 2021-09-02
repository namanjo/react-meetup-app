import NewMeetupForm from "../components/meetups/NewMeetupForm"
import { useHistory } from 'react-router-dom';

import { useContext } from "react";
import { MeetupContext } from "../store/contextData";



function NewMeetup() {

    const history = useHistory();

    const context_data = useContext(MeetupContext);

    function addMeetupHandler(meetupData) {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newData = {id, ...meetupData};
        context_data.addMeetup(newData);
        history.replace('/');
      }



    return (
        <section>
            <h1>New Meetup Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
        
    )
}

export default NewMeetup
