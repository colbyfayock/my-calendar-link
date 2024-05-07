import { useState } from 'react';
import { google, outlook, office365, yahoo, ics, CalendarEvent } from "calendar-link";

function App() {
  const [isOpen, setIsOpen] = useState(false);

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
      <span className="inline-block relative">
        <button
          className="bg-white border border-zinc-600 rounded px-4 py-3 font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          Add to Calendar
        </button>
        <ul className={`${isOpen ? 'opacity-100' : 'opacity-0' } absolute top-full left-0 min-w-full border shadow-lg py-2 px-1 transition-opacity`}>
          <li>
            <a href={icsUrl} target="_blank" className="block text-zinc-800 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap">
              Apple (iCal)
            </a>
          </li>
          <li>
            <a href={googleUrl} target="_blank" className="block text-zinc-800 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap">
              Google Calendar
            </a>
          </li>
          <li>
            <a href={office365Url} target="_blank" className="block text-zinc-800 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap">
              Office365
            </a>
          </li>
          <li>
            <a href={outlookUrl} target="_blank" className="block text-zinc-800 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap">
              Outlook
            </a>
          </li>
          <li>
            <a href={yahooUrl} target="_blank" className="block text-zinc-800 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap">
              Yahoo
            </a>
          </li>
        </ul>
      </span>
    </div>
  )
}

export default App
