import React, { useEffect } from 'react'
import $ from 'jquery'

import './navbar.css'
import Button from './Button'

import logo from '../image/svg/logo.svg'
import icon_shop from '../image/svg/icon-shop.svg'

const Navbar = () => {
  useEffect(() => {
    $('.nav-item')
      .click(function () {
        // 找 li 裡的 a href'#id'
        const $this = $(this),
          clickThis = $this.find('a').attr('href')

        // 自己有 active，其他沒有
        $this.addClass('active').siblings('.active').removeClass('active')

        $(clickThis).stop(false, true).fadeIn().siblings().hide()

        return false
      })
      .find('a')
      .focus(function () {
        this.blur()
      })
  })

  return (
    <>
      <nav className="navbar">
        <div className="navbar-c">
          <div className="logo">
            <a href="../pages/Homepage.js">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="navbar-link" id="navbarText">
            <ul className="navbar-ul mx-auto">
              <li className="nav-item">
                <a href="../pages/reservations/ReservationIndex.js">預約艙房</a>
              </li>
              <li className="nav-item">
                <a href="../pages/items/ItemIndex.js">宇宙市集</a>
              </li>
              <li className="nav-item">
                <a href="../pages/game/GameIndex.js">星際任務</a>
              </li>
              <li className="nav-item">
                <a href="../pages/message/MessageIndex.js">太空交誼廳</a>
              </li>
              <li className="nav-item">
                <a href="../pages/About.js">聯絡總署</a>
              </li>
            </ul>
          </div>
          <div className="right-items">
            <div className="shopping-cart">
              <a href="../pages/cart/CartIndex.js">
                <img src={icon_shop} alt="" />
                {/* <span className="shopping-count">0</span> */}
              </a>
            </div>
            <div className="btn-login-registered">
              <Button
                className="login-registered"
                link="/login"
                buttonText="登入 / 註冊"
              />
              {/* <div class="memberLogin"></div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
