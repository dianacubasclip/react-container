import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

  const DashboardComponet = ({ window, name = 'LogisticsDrawer'}) => {
    let location = useLocation()

    console.log(location)
    const renderMFE = () => {
      window[`render${name}`](`${name}-container`, history);
    }

  const loadMFE = () => {
    const scriptId = `micro-frontend-script-${name}`;
    if (document.getElementById(scriptId)) {
      renderMFE()
      return;
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'http://localhost:3007/bundle.js'
    script.crossOrigin = ''
    script.onload = renderMFE
    document.head.appendChild(script)
  }

    useEffect(() => {
      loadMFE()

      return () => {
        if (document.getElementById(`${name}-container`)) {
          window[`unmount${name}`](`${name}-container`);
        }
      }
    })

    return (
      <>
        <main id={`${name}-container`} className="" />
      </>
    )
  }

  DashboardComponet.defaultProps = {
  document,
  window,
};
  
  export default DashboardComponet