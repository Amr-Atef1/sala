import Header from "./container/Header"
import Footer from "./container/Footer"
import Sidebar from "./container/Sidebar"
import { Route, Routes } from "react-router-dom"
import Content from "./container/Content"
import Test from "./container/Test"
function App() {
 
  return (
    <>
    <Header/>
    <div className="flex max-sm:justify-center relative">
      <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/products" element={<Test/>} />
            <Route path="/orders"  />
            
      </Routes>
      <Sidebar/>
    </div>
    <Footer/>
    </>
  )
}

export default App
