import React from 'react'

// Components
import Button from '../components/atoms/Button'

function Homepage() {
  return (
    <main className="home">
      <div className="grid">
        <div className="container-sm">
          <h1 className="title-layer1-700">
            <span role="img" aria-label="wave">👋</span>
            Assignment boilerplate
          </h1>
          <Button>Doe is</Button>
        </div>
      </div>
    </main>
  )
}

export default Homepage
