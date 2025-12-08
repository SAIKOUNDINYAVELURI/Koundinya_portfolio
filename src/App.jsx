import { BrowserRouter, Routes, Route } from "react-router"
import Portfolio from './Portfolio/Portfolio'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
