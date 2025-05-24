import { Link } from 'react-router'

const Page2 = () => {
  return (
      <div>
        <div>This is PAGE 2</div>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/page-1">Page 1</Link>
      </div>
  )
}

export default Page2