import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div
        className="content-js"
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          height: '200px',
          width: '200px',
        }}
      >
        <div>item</div>
        <div>item</div>
        <div>item</div>
        <div>item</div>
      </div>
    )
  }
}

export default App
