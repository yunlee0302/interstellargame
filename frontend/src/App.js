import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

// import 路徑： './pages/你負責的功能/你的index'
// import Homepage from './pages/Homepage'
// import About from './pages/About'
import ReservationIndex from './pages/reservations/ReservationIndex'
// import MemberIndex from './pages/reservations/MemberIndex'
// import ItemIndex from './pages/items/ItemIndex'
// import CartIndex from './pages/cart/CartIndex'
// import MessageIndex from './pages/message/MessageIndex'

const App = () => {
  // 會員登入： 1. 在這邊設立狀態然後分別傳下去嗎？ 2. 有沒有其他做法
  const [auth, setAuth] = useState(false)

  return (
    <Router>
      <Navbar />
      <Switch>
        {/* <Homepage />
        <About />
        <MemberIndex /> */}
        <ReservationIndex />
        {/* <ItemIndex />
        <CartIndex />
        <MessageIndex/> */}
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
