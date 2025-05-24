import { useState } from 'react'
import { Link } from 'react-router'
import '../App.css'
import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Link to="/page-1">Page 1</Link>
        &nbsp;
        <Link to="/page-2">Page 2</Link>
      </div>
    </>
  )
}

export default Home
