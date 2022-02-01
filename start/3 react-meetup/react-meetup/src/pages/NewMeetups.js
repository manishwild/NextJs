import { useHistory } from 'react-router-dom'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupsPage() {
  const history = useHistory()
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-meetups-2c303-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() =>{
      //we can use push also but replace will not let u go back when we click back button
      history.replace('/')
    })
  }

  return (
    <section>
      <h1>New Meetups Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupsPage
