import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
// import 路徑： './pages/你負責的功能/你的index'
// import Homepage from './pages/Homepage'
// import About from './pages/About'
import ReservationIndex from './pages/reservations/ReservationIndex'
// import MemberIndex from './pages/reservations/MemberIndex'
// import ItemIndex from './pages/items/ItemIndex'
// import CartIndex from './pages/cart/CartIndex'
// import MessageIndex from './pages/message/MessageIndex'
//Hannah
import MemberIndex from './pages/member/MemberIndex'
import MemberEdit from './pages/member/MemberEdit'
import MemberFavList from './pages/member/MemberFavList'
import MemberOrder from './pages/member/MemberOrder'
import MemberCoupon from './pages/member/MemberCoupon'
import MemberPwdEdit from './pages/member/MemberPwdEdit'
import MemberPwdEditSuccess from './pages/member/MemberPwdEditSuccess'
import LoginIndex from './pages/login/LoginIndex'
import Register from './pages/login/Register'
import ForgetPwd from './pages/login/ForgetPwd'
import ForgetPwdMailSent from './pages/login/ForgetPwdMailSent'
import Shoppingcart4 from './pages/Cart/Shoppingcart4'
import Shoppingcart1 from './pages/Cart/Shoppingcart1'
import Shoppingcart2 from './pages/Cart/Shoppingcart2'
import Shoppingcart3 from './pages/Cart/Shoppingcart3'
const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop>
      <Switch>
        {/* <Homepage />
        <About />
        <MemberIndex /> */}
        {/* Hannah */}
        <Route path="/login">
          <LoginIndex />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgetPwd">
          <ForgetPwd />
        </Route>
        <Route path="/forgetPwdMailSent">
          <ForgetPwdMailSent />
        </Route>
        <Route path="/member/memberPwdEditSuccess">
          <MemberPwdEditSuccess />
        </Route>
        <Route path="/member/memberPwdEdit">
          <MemberPwdEdit />
        </Route>
        <Route path="/member/memberCoupon">
          <MemberCoupon />
        </Route>
        <Route path="/member/memberOrder">
          <MemberOrder />
        </Route>
        <Route path="/member/memberEdit">
          <MemberEdit />
        </Route>
        <Route path="/member/memberFavList">
          <MemberFavList />
        </Route>
        <Route path="/member">
          <MemberIndex />
        </Route>
        <Route path="/Shoppingcart1">
            <Shoppingcart1 />
          </Route>
       <Route path="/Shoppingcart2">
            <Shoppingcart2 />
          </Route> 
          <Route path="/Shoppingcart3">
            <Shoppingcart3 />
          </Route>
          <Route path="/Shoppingcart4">
            <Shoppingcart4 />
          </Route>
        <ReservationIndex />
        {/* <ItemIndex />
        <CartIndex />
        <MessageIndex/> */}
      </Switch>
      </ScrollToTop>
      <Footer />
    </Router>
  )
}

export default App
