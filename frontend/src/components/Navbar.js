import React, { useEffect } from 'react'
import $ from 'jquery'

import './navbar.css'
import Button from './Button'

import logo from '../pages/image/svg/logo.svg'
import icon_shop from '../pages/image/svg/icon-shop.svg'

const Navbar = () => {
  const userId = JSON.parse(localStorage.getItem('userId'))

  useEffect(() => {
    $('.nav-ul')
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
            <a href="/homepage">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="navbar-link" id="navbarText">
            <ul className="navbar-ul mx-auto">
              <li className="nav-item">
                <a href="/booking/steps">預約艙房</a>
              </li>
              <li className="nav-item">
                <a href="/item-list">宇宙市集</a>
              </li>
              <li className="nav-item">
                <a href="/Game">星際任務</a>
              </li>
              <li className="nav-item">
                <a href="/messageboard">太空交誼廳</a>
              </li>
              <li className="nav-item">
                <a href="/about">聯絡總署</a>
              </li>
            </ul>
          </div>
          <div className="right-items">
            <div className="shopping-cart">
              <a href="/ShoppingCart1">
                <img src={icon_shop} alt="" />
                <span className="shopping-count">0</span>
              </a>
            </div>
            <div className="button-control">
              {userId ? (
                <Button
                  className="btn2 memberCenter"
                  link="/member"
                  buttonText="會員中心"
                />
              ) : (
                <Button
                  className="btn2 login-registered"
                  link="/login"
                  buttonText="登入 / 註冊"
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
