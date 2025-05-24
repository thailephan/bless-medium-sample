import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="page-1" element={<Page1 />} />
      <Route path="page-2" element={<Page2 />} />
    </Routes>
  )
}

export default App
