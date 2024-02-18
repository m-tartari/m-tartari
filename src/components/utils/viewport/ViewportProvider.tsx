import React from 'react'

import viewportContext from './viewportContext'

const ViewportProvider = (props: { children: React.ReactNode }) => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const [height, setHeight] = React.useState(window.innerHeight)
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return <viewportContext.Provider value={{ width, height }}>{props.children}</viewportContext.Provider>
}

export default ViewportProvider
