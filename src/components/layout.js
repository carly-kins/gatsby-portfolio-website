import * as React from 'react'
import Navigation from './nav'

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Navigation/>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      {/*TODO: ADD FOOTER*/}
    </>
  )
}

export default Layout