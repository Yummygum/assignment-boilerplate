import React from 'react'

// Components
import Button from '../components/atoms/Button'

// Styles
import '../styles/pages/home.scss'

function Homepage() {
  return (
    <main className="home">
      <div className="grid">
        <div className="container-sm">
          <h1 className="title-layer1-700">
            <span role="img" aria-label="wave">👋 </span>
            Assignment boilerplate
          </h1>
          <Button>Click here</Button>
        </div>
      </div>
    </main>
  )
}

export default Homepage
