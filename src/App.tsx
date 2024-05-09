import { useEffect, useRef, useState } from 'react';
import { google, outlook, office365, yahoo, ics, CalendarEvent } from "calendar-link";

function App() {
  const buttonRef = useRef<HTMLSpanElement | null>(null);
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

  function handleOnClick(event: MouseEvent) {
    // Look for the button in the path of elements starting at
    // the element that was clicked and look for the button.
    if ( buttonRef.current && !event.composedPath().includes(buttonRef.current) ) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOnClick);
    return () => {
      document.body.removeEventListener('click', handleOnClick);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <span ref={buttonRef} className="inline-block relative">
        <button
          className="bg-white border border-zinc-600 rounded px-4 py-3 font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          Add to Calendar
        </button>
        <ul className={`${isOpen ? 'opacity-100' : 'opacity-0 invisible' } absolute top-full left-0 min-w-full border shadow-lg py-2 px-1 transition-opacity`}>
          <li>
            <a href={icsUrl} target="_blank" className="flex items-center gap-2 text-zinc-800 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"></path>
              </svg>
              Apple (iCal)
            </a>
          </li>
          <li>
            <a href={googleUrl} target="_blank" className="flex items-center gap-2 text-zinc-800 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M18.316 5.684H24v12.632h-5.684V5.684zM5.684 24h12.632v-5.684H5.684V24zM18.316 5.684V0H1.895A1.894 1.894 0 000 1.895v16.421h5.684V5.684h12.632zm-7.207 6.25v-.065c.272-.144.5-.349.687-.617s.279-.595.279-.982c0-.379-.099-.72-.3-1.025a2.05 2.05 0 00-.832-.714 2.703 2.703 0 00-1.197-.257c-.6 0-1.094.156-1.481.467-.386.311-.65.671-.793 1.078l1.085.452c.086-.249.224-.461.413-.633.189-.172.445-.257.767-.257.33 0 .602.088.816.264a.86.86 0 01.322.703c0 .33-.12.589-.36.778-.24.19-.535.284-.886.284h-.567v1.085h.633c.407 0 .748.109 1.02.327.272.218.407.499.407.843 0 .336-.129.614-.387.832s-.565.327-.924.327c-.351 0-.651-.103-.897-.311-.248-.208-.422-.502-.521-.881l-1.096.452c.178.616.505 1.082.977 1.401.472.319.984.478 1.538.477a2.84 2.84 0 001.293-.291c.382-.193.684-.458.902-.794.218-.336.327-.72.327-1.149 0-.429-.115-.797-.344-1.105a2.067 2.067 0 00-.881-.689zm2.093-1.931l.602.913L15 10.045v5.744h1.187V8.446h-.827l-2.158 1.557zM22.105 0h-3.289v5.184H24V1.895A1.894 1.894 0 0022.105 0zm-3.289 23.5l4.684-4.684h-4.684V23.5zM0 22.105C0 23.152.848 24 1.895 24h3.289v-5.184H0v3.289z"></path>
              </svg>
              Google Calendar
            </a>
          </li>
          <li>
            <a href={office365Url} target="_blank" className="flex items-center gap-2 text-zinc-800 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0v11.408h11.408V0zm12.594 0v11.408H24V0zM0 12.594V24h11.408V12.594zm12.594 0V24H24V12.594z"></path>
              </svg>
              Office365
            </a>
          </li>
          <li>
            <a href={outlookUrl} target="_blank" className="flex items-center gap-2 text-zinc-800 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75v8.3l1.24.72h.01q.1.07.18.18.07.12.07.25zm-6-8.25v3h3v-3zm0 4.5v3h3v-3zm0 4.5v1.83l3.05-1.83zm-5.25-9v3h3.75v-3zm0 4.5v3h3.75v-3zm0 4.5v2.03l2.41 1.5 1.34-.8v-2.73zM9 3.75V6h2l.13.01.12.04v-2.3zM5.98 15.98q.9 0 1.6-.3.7-.32 1.19-.86.48-.55.73-1.28.25-.74.25-1.61 0-.83-.25-1.55-.24-.71-.71-1.24t-1.15-.83q-.68-.3-1.55-.3-.92 0-1.64.3-.71.3-1.2.85-.5.54-.75 1.3-.25.74-.25 1.63 0 .85.26 1.56.26.72.74 1.23.48.52 1.17.81.69.3 1.56.3zM7.5 21h12.39L12 16.08V17q0 .41-.3.7-.29.3-.7.3H7.5zm15-.13v-7.24l-5.9 3.54z"></path>
              </svg>
              Outlook
            </a>
          </li>
          <li>
            <a href={yahooUrl} target="_blank" className="flex items-center gap-2 text-zinc-800 hover:bg-zinc-50 px-4 py-2 whitespace-nowrap">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M8 2v4M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              Yahoo
            </a>
          </li>
        </ul>
      </span>
    </div>
  )
}

export default App
