import { google, outlook, office365, yahoo, ics, CalendarEvent } from "calendar-link";

function App() {
  const event: CalendarEvent = {
    title: 'Space Jelly Palooza',
    description: 'The biggest party in the universe.',
    start: '2024-07-14 10:00:00 +0300',
    duration: [8, 'hour'],
  };

  const googleUrl = google(event);
  const outlookUrl = outlook(event);
  const office365Url = office365(event);
  const yahooUrl = yahoo(event);
  const icsUrl = ics(event);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <ul>
        <li>
          <a href={icsUrl} target="_blank">Add to Apple (iCal)</a>
        </li>
        <li>
          <a href={googleUrl} target="_blank">Add to Google Calendar</a>
        </li>
        <li>
          <a href={office365Url} target="_blank">Add to Office365</a>
        </li>
        <li>
          <a href={outlookUrl} target="_blank">Add to Outlook</a>
        </li>
        <li>
          <a href={yahooUrl} target="_blank">Add to Yahoo</a>
        </li>
      </ul>
    </div>
  )
}

export default App
