import { useState } from 'react'
import './index.css'
import { Scene } from './scene/Scene'
import { TintOverlay } from './components/TintOverlay'
import { DevTimeScrubber } from './components/DevTimeScrubber'

function App() {
  const [devHour, setDevHour] = useState<number>(() => {
    const now = new Date()
    return now.getHours() + now.getMinutes() / 60
  })

  return (
    <>
      <Scene />
      <TintOverlay overrideHour={import.meta.env.DEV ? devHour : undefined} />
      {import.meta.env.DEV && (
        <DevTimeScrubber value={devHour} onChange={setDevHour} />
      )}
    </>
  )
}

export default App
