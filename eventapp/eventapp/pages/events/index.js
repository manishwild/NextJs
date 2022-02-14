import { Fragment } from 'react'
import { useRouter } from 'next/router'

import EventList from '../../components/events/EventList'
import EventsSearch from '../../components/events/eventsSearch'
import { getAllEvents } from '../../dummy-data'

function EventPage() {
  const router = useRouter()
  const events = getAllEvents()

  function FindEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }
  return (
    <Fragment>
      <EventsSearch onSearch={FindEventHandler} />
      <EventList items={events} />
    </Fragment>
  )
}
export default EventPage
