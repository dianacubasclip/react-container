import React, { useEffect } from 'react'

const PageComponent = (props) =>  {
  const { name, host } = props;

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
    script.src = `${host}/bundle.js`
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
    <main id={`${name}-container`} />
  )
}

PageComponent.defaultProps = {
  document,
  window,
}
export default PageComponent