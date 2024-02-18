import React from 'react'

type Viewport = { width: number; height: number }
const viewportContext = React.createContext<Viewport>({ width: window.innerWidth, height: window.innerHeight })

export default viewportContext
