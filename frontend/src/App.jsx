import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    <>
    <BrowserRouter>
      <routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
      </routes>
    </BrowserRouter>
    </>
  )
}

export default App
