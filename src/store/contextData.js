import React, { useState, createContext } from 'react'


export const MeetupContext = createContext();

export const MeetupProvider = (props) => {


    const [meetups, setMeetup] = useState([
        {
            id: 1,
            title: 'Annual Photography meetup',
            image:
              'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description:
              'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
          },
          {
            id: 2,
            title: 'Dating Meetup',
            image:
              'https://img.etimg.com/thumb/msid-73045961,width-650,imgsize-347388,,resizemode-4,quality-100/according-to-data-culled-from-over-2000-respondents-women-on-the-app-okcupid-were-2-5-times-more-likely-than-men-to-garner-a-response-if-they-initiated-the-conversation-.jpg',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description:
              'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
          },
        {
            id: 3,
            title: 'Google developers meetup',
            image:
              'https://officesnapshots.com/wp-content/uploads/2016/09/google-boston-cambridge-office-design-1-700x525.jpg',
            address: 'Meetupstreet 5, 12345 Meetup City',
            description:
              'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
          },
          
          
    ]);

    function addMeetup(meetup_item) {
        setMeetup([...meetups, meetup_item]);
      }

    const context={
        meetups: meetups,
        addMeetup: addMeetup,
    }

    return (
        <MeetupContext.Provider value={context}>
            {props.children}
        </MeetupContext.Provider>
    )


}