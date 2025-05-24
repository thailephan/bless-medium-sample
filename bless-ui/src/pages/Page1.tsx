import { Link } from 'react-router'

const Page1 = () => {
  return (
      <div>
        <div>This is PAGE 1</div>
        <br />
        <Link to="/">Home</Link>
        <br />
        <Link to="/page-2">Page 2</Link>
      </div>
  )
}

export default Page1